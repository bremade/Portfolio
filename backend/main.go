package main

import (
	"os"
    "github.com/gin-gonic/gin"
    
    "github.com/bremade/Portfolio/api"
)

func errorHandler(err error, exitCode int) {
	if err != nil {
		os.Exit(exitCode)
	}
}

func main() {
	router := gin.Default()

	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = "8000"
	}

	// Api
	api := api.New()
	apiRouter := router.Group("/api/v1")
	apiRouter.GET("/status", api.Status)

	err := router.Run(":" + port)
	errorHandler(err, 2)
}
