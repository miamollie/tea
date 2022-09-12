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


### TODO
- requests.http
- docker
- deploy
