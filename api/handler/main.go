package main

import (
	"context"
	"log"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	chiadapter "github.com/awslabs/aws-lambda-go-api-proxy/chi"
	"github.com/go-chi/chi/v5"
	"github.com/miamollie/tea/api"
	"github.com/miamollie/tea/api/spec"
)

const defaultPort = "8080"

var adapter *chiadapter.ChiLambda
var chiRouter *chi.Router

// init function is executed when your handler is loaded
func init() {
	if adapter == nil {
		// stdout and stderr are sent to AWS CloudWatch Logs
		log.Printf("Chi handler cold start")

		chiRouter := chi.NewRouter()

		chiRouter.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
			_, _ = w.Write([]byte("Lookin' good :)"))
		})

		teaService := api.NewTeaService(make(map[int64]api.Tea)) //TODO actually fill out the teas

		spec.HandlerFromMux(teaService, chiRouter)

		// using a chiadapter the handler will use the go-chi router to handle the requests
		adapter = chiadapter.New(chiRouter)
	}
}

// The Lambda function handler is the method in your function code that processes events.
// When your function is invoked, Lambda runs the handler method.
// Executes in response to a request
// When the handler exits or returns a response, it becomes available to handle another event.
func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	log.Printf("Event: %+v\n", req)
	return adapter.ProxyWithContext(ctx, req)
}

// Main function called only on first starting the lambda (not per request)
func main() {
	log.Printf("Main called")

	lambda.Start(Handler)
}
