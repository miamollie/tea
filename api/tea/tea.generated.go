// Package tea provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.11.0 DO NOT EDIT.
package tea

// Description defines model for Description.
type Description = string

// Error defines model for Error.
type Error struct {
	Message string `json:"message"`
}

// Tea defines model for Tea.
type Tea struct {
	Description *Description `json:"description,omitempty"`
	Id          int32        `json:"id"`
	Name        int32        `json:"name"`
}
