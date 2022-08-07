package main

import (
	"os"

	"github.com/gin-gonic/gin"

	"github.com/bremade/Portfolio/api"
	"github.com/bremade/Portfolio/util"
)

func errorHandler(err error, exitCode int) {
	if err != nil {
		os.Exit(exitCode)
	}
}

func setDefaultHeader(c *gin.Context) {
	c.Header("Test", "Test")
}


func main() {
	router := gin.Default()
	router.Use(setDefaultHeader)

	port := util.GetEnvDefault("PORT", "8000");
	os.Getenv("PORT")
	if len(port) == 0 {
		port = "8000"
	}

	// Api
	api := api.New()
	apiRouter := router.Group("/api/v1")
	apiRouter.GET("/status", api.Status)

	// Mail
	apiRouter.POST("/mail/send", api.SendMail)

	// Ghost
	apiRouter.GET("/blog/retrieve", api.RetrieveRandomBlogPosts)

	err := router.Run(":" + port)
	errorHandler(err, 2)
}
