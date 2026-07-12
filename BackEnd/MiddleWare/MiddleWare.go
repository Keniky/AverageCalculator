package middleware

import "net/http"

// stuff get in middleware first and then go to other stuff
func CorsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-AllowOrigin", "*")
		w.Header().Set("Access-Control-Allow-Origin", "GET, OPTIONS")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
