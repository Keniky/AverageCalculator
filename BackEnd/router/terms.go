package router

import (
	models "BackEnd/Models"
	"encoding/json"
	"fmt"
	"net/http"
)

type TermHandler struct {
}

func NewTermHandler() *TermHandler {
	return &TermHandler{}
}

func (handler *TermHandler) GetTerms(w http.ResponseWriter, r *http.Request) {

	fmt.Println("returning Terms")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"dawg": "dawg"}`))
}

func (handler *TermHandler) CreateTerms(w http.ResponseWriter, r *http.Request) {

	var term models.Term
	if err := json.NewDecoder(r.Body).Decode(&term); err != nil {
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}

	fmt.Print("creating term")
	fmt.Println(" DATA:", term.Modules[0].Name)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"dawg": "dawg"}`))

}
