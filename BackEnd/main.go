package main

import (
	middleware "BackEnd/MiddleWare"
	"BackEnd/db"
	"BackEnd/router"
	"log"
	"net/http"

	"github.com/joho/godotenv"
)

func main() {

	godotenv.Load()
	database, err := db.Connect()

	if err != nil {
		log.Fatalf("failed to connect to database ", err)
	}

	defer database.Close()

	mux := router.New(database)
	http.ListenAndServe(":8000", middleware.CorsMiddleware(mux))
}
