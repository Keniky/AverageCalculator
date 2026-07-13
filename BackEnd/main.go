package main

import (
	middleware "BackEnd/MiddleWare"
	"BackEnd/router"
	"net/http"
)

func main() {

	mux := router.New()
	http.ListenAndServe(":8000", middleware.CorsMiddleware(mux))
}
