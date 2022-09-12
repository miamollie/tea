//go:generate go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen --old-config-style --config=config.tea.yml ./tea.yml
//go:generate go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen --old-config-style --config=config.schema.yml ./schema.yml

package api

import (
	"encoding/json"
	"net/http"
)

type TeaService struct {
	Teas map[int64]Tea
}

type Tea struct {
	Id          int32
	Name        string
	Description string
}

func NewTeaService(teas map[int64]Tea) *TeaService {
	return &TeaService{
		Teas: teas,
	}
}

func (ts *TeaService) GetTeas(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(ts.Teas)
}

func (ts *TeaService) AddTea(w http.ResponseWriter, r *http.Request) {
	// add the tea
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(ts.Teas)
}

func (ts *TeaService) GetTea(w http.ResponseWriter, r *http.Request, teaId int) {
	// add the tea
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(ts.Teas)
}
