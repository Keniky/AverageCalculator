package router

import (
	"net/http"
)

func New() *http.ServeMux {
	mux := http.NewServeMux()

	TermHandler := NewTermHandler()

	mux.HandleFunc("GET /terms", TermHandler.GetTerms)
	mux.HandleFunc("POST /terms", TermHandler.CreateTerms)

	return mux
}
