package main

import (
	middleware "BackEnd/MiddleWare"
	"net/http"
)

func main() {

	mux := http.NewServeMux()

	http.ListenAndServe(":8000", middleware.CorsMiddleware(mux))
}
