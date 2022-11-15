package api

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type TeaService struct {
	Teas []Tea
}

type Tea struct {
	Id          int32  `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

var teas = []Tea{{
	Id:          0,
	Name:        "Barry's",
	Description: "Best tea ever",
}, {
	Id:          1,
	Name:        "Chai",
	Description: "Passible in a pinch",
}, {
	Id:          2,
	Name:        "Herbal",
	Description: "Why bother... flavoured water.",
}}

func NewTeaService() *TeaService {
	return &TeaService{
		Teas: teas,
	}
}

func (ts *TeaService) GetTeas(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("GET TEAS")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(ts.Teas)
}

func (ts *TeaService) AddTea(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("ADD TEA")

	// add the tea todo will need to add it for reals too
	t := append(ts.Teas, Tea{5, "Some tea", "This is a new tea!"})
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(t[0])
}

func (ts *TeaService) GetTea(w http.ResponseWriter, r *http.Request, teaId int) {
	fmt.Printf("GET TEA")

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(ts.Teas[teaId])
}

// func (ts *TeaService) DeleteTea(w http.ResponseWriter, r *http.Request, teaId int) {
// 	// add the tea
// 	w.WriteHeader(http.StatusOK)
// 	json.NewEncoder(w).Encode(ts.Teas)
// }

// TODO update like this: https://github.com/adamjq/go-rest-api-serverless/blob/master/internal/server/server.go
