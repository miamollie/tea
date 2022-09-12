package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/miamollie/tea/api"
	"github.com/miamollie/tea/api/spec"
)

const defaultPort = "8080"

func main() {
	r := chi.NewRouter()

	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		_, _ = w.Write([]byte("Lookin' good :)"))
	})

	teaService := api.NewTeaService(make(map[int64]api.Tea)) //TODO actually fill out the teas

	spec.HandlerFromMux(teaService, r)

	s := &http.Server{
		Handler: r,
		Addr:    fmt.Sprintf(":%s", defaultPort),
	}

	log.Printf("now listening for requests at http://localhost:%s", defaultPort)

	// And we serve HTTP until the world ends.
	log.Fatal(s.ListenAndServe())
}
