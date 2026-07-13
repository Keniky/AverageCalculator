package router

import (
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

	fmt.Println("creating term")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"dawg": "dawg"}`))

}
