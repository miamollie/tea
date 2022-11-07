# tea

Example of Golang api using OpenAPI schemas

Types generated using `https://github.com/deepmap/oapi-codegen/`

## Development

Updating the schema

1. Add to the `schema.yml` file
1. run `go generate ./...`

### Running the app

Bring up the app

`go run main.go`

test the endpoints with curl or in vscode using the `requests.http` files

```
curl --request GET --url http://localhost:8080/teas
curl --request POST --url http://localhost:8080/teas
curl --request GET --url http://localhost:8080/teas/{id}
```

### Deployment

Backend ...
Infra managed with CDK. See [ops/cdk][./ops/cdk/readme.md]

`x-amazon-apigateway-integration` Is set to be the execution endpoint of the lambda handler and must be a POST request
-> https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-integrations.html

Endpoint currently deployed to: https://z4106slus8.execute-api.us-east-1.amazonaws.com/prod/teas

Frontend... Qwik UI deployed with cloudflare pages https://tea-fm0.pages.dev/

### TODO

- Env variables
- use TS types generated from OAPI schema
- github action CI https://medium.com/geekculture/how-to-automate-aws-cdk-deployments-using-github-actions-cec5db24ca8d
- add architecture diagram
- include swagger middleware for validating API
- add DB
- auth: https://docs.aws.amazon.com/cdk/api/v1/docs/aws-apigateway-readme.html#lambda-based-token-authorizer
- observability

### References

https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-extensions-integrations.html -> extensions support the AWS-specific authorization and API Gateway-specific API integrations for REST APIs and HTTP APIs.
https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.SpecRestApi.html -> CDK construct that builds an API Gateway from an OpenAPI spec
https://docs.aws.amazon.com/lambda/latest/dg/golang-handler.html -> reference for using go as a lambda handler
https://github.com/awslabs/aws-lambda-go-api-proxy/ -> framework allows using go-chi with a lambda handler

https://docs.aws.amazon.com/cdk/api/v2/docs/@aws-cdk_aws-lambda-go-alpha.BundlingOptions.html CDK construct for using go as a lambda
