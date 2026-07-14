package router

import (
	models "BackEnd/Models"
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
)

type ModuleHandler struct {
	DB *sql.DB
}

func NewModuleHandler(db *sql.DB) *ModuleHandler {
	return &ModuleHandler{DB: db}
}

func (m *ModuleHandler) getModules(w http.ResponseWriter, r *http.Request) {

	termId := r.Header.Get("termId")

	fmt.Println(termId)
	var modules []models.Module
	rows, err := m.DB.Query("SELECT name, td, exam, coff FROM module WHERE termId = $1",
		termId)

	if err != nil {
		http.Error(w, "Internal Server error In Modules retrieve", http.StatusInternalServerError)
		return
	}

	defer rows.Close()

	for rows.Next() {
		var module models.Module

		if err = rows.Scan(&module.Name, &module.TD, &module.Exam, &module.Coff); err != nil {
			http.Error(w, "Internal Server error In Modules retrieve", http.StatusInternalServerError)
			return
		}
		modules = append(modules, module)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(modules)
}

type reqBody struct {
	TermId string `json:"termId"`
}
