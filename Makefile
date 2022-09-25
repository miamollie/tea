
CDK_DIR=ops/cdk
BINARY_NAME=dist/api
CMD_PATH=api/handler/main.go
AWS_PROFILE=miamollie

default: clean validate test build

generate:
	go generate ./...

test: generate
	go test ./...

clean:
	rm -rf dist

build:
	GOARCH=amd64 GOOS=linux go build -o $(BINARY_NAME) $(CMD_PATH)

run:
	go run ./cmd/api/main.go



########## AWS ##########

deploy: 
	aws-vault exec $(AWS_PROFILE) --  npx cdk synth && npx cdk deploy