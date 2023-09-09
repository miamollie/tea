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

Frontend... NextJs on Cloudflare pages.
- `/` index route for a list of teas
- `/tea/{id}` for info about a specific tea
- `/create` to add a new tea [route requires auth access and api needs auth access too]


## Auth

https://github.com/auth0/nextjs-auth0#edge-for-middleware-and-the-edge-runtime

- need to proxy api requests through the nextjs api endpoints (no cors then anyway, server to server)
- add customised header component to say hi and have logout everywhere
- protect `/create` route, redirects to a sorry "go home" 403 page if you can't log in
- need to protect api routes by locking down the lambda so it can only be requested from the next app?
https://www.wellarchitectedlabs.com/security/300_labs/300_multilayered_api_security_with_cognito_and_waf/3_prevent_requests_from_accessing_api_directly/

https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-3-clxbrcqppv#add-the-auth0-sdk



https://github.com/auth0/nextjs-auth0/blob/main/ARCHITECTURE.md

### TODO
- use TS types generated from OAPI schema
- auth (only auth can `create`?): https://docs.aws.amazon.com/cdk/api/v1/docs/aws-apigateway-readme.html#lambda-based-token-authorizer
- add architecture diagram
- github action CI https://medium.com/geekculture/how-to-automate-aws-cdk-deployments-using-github-actions-cec5db24ca8d
- include swagger middleware for validating API
- add DB
- observability

### References

https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-extensions-integrations.html -> extensions support the AWS-specific authorization and API Gateway-specific API integrations for REST APIs and HTTP APIs.
https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.SpecRestApi.html -> CDK construct that builds an API Gateway from an OpenAPI spec
https://docs.aws.amazon.com/lambda/latest/dg/golang-handler.html -> reference for using go as a lambda handler
https://github.com/awslabs/aws-lambda-go-api-proxy/ -> framework allows using go-chi with a lambda handler

https://docs.aws.amazon.com/cdk/api/v2/docs/@aws-cdk_aws-lambda-go-alpha.BundlingOptions.html CDK construct for using go as a lambda
