package models

type Term struct {
	ID      string   `json:"id"`
	Name    string   `json:"name"`
	Modules []Module `json:"modules"`
}

type Module struct {
	ID     string `json:"id"`
	Name   string `json:"name"`
	TD     bool   `json:"td"`
	Exam   bool   `json:"exam"`
	Coff   uint   `json:"coff"`
	TermID string
}
