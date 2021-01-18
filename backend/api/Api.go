package api

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

type Api struct {}

func New() *Api {
    return &Api{}
}

func (api *Api) Status(c *gin.Context) {
    c.JSONP(http.StatusOK, gin.H{ "status": "ok" })
}