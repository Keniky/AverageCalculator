package router

import (
	"database/sql"
	"net/http"
)

func New(db *sql.DB) *http.ServeMux {
	mux := http.NewServeMux()

	TermHandler := NewTermHandler(db)
	ModuleHandler := NewModuleHandler(db)

	mux.HandleFunc("GET /terms", TermHandler.GetTerms)
	mux.HandleFunc("POST /terms", TermHandler.CreateTerms)

	mux.HandleFunc("GET /modules", ModuleHandler.getModules)

	return mux
}
