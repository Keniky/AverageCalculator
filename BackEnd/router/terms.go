package router

import (
	models "BackEnd/Models"
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
)

type TermHandler struct {
	DB *sql.DB
}

func NewTermHandler(db *sql.DB) *TermHandler {
	return &TermHandler{DB: db}
}

func (handler *TermHandler) GetTerms(w http.ResponseWriter, r *http.Request) {

	row, err := handler.DB.Query(`SELECT id, name FROM term`)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer row.Close()
	terms := []models.Term{}

	for row.Next() {
		var term models.Term
		if err = row.Scan(&term.ID, &term.Name); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		terms = append(terms, term)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(terms)
}

func (handler *TermHandler) CreateTerms(w http.ResponseWriter, r *http.Request) {

	transaction, err := handler.DB.Begin()

	term, err := getData(r)
	if err != nil {
		http.Error(w, "invalid body failed to getData", http.StatusBadRequest)
		return
	}
	fmt.Println("test")

	err = insertTermWithModulesIntoDataBase(term, transaction)
	if err != nil {
		fmt.Println(err)
		http.Error(w, "invalid body failed to insert into db", http.StatusInternalServerError)
		return
	}

	fmt.Println("test")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"dawg": "dawg"}`))

}

func getData(request *http.Request) (models.Term, error) {

	var term models.Term
	if err := json.NewDecoder(request.Body).Decode(&term); err != nil {
		return term, err
	}
	fmt.Print("creating term")
	fmt.Println(" DATA:", term.Modules)
	return term, nil
}

func insertTermWithModulesIntoDataBase(term models.Term, transaction *sql.Tx) error {

	defer transaction.Rollback()

	//create term
	var id string
	err := transaction.QueryRow(
		`INSERT INTO term (name) VALUES ($1) RETURNING id`,
		term.Name,
	).Scan(&id)

	if err != nil {
		return err
	}
	for _, module := range term.Modules {
		_, err = transaction.Exec(
			`INSERT INTO module (name, td, exam, coff, termid) VALUES ($1, $2, $3, $4, $5)`,
			module.Name,
			module.TD,
			module.Exam,
			module.Coff,
			id,
		)
		if err != nil {
			return err
		}
	}

	err = transaction.Commit()
	if err != nil {
		return err
	}

	return nil
}
