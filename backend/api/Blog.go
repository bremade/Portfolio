package api

import (
	"net/http"

	"github.com/bremade/Portfolio/control"
	"github.com/bremade/Portfolio/util"
	"github.com/gin-gonic/gin"
)

func (api *Api) RetrieveRandomBlogPosts(c *gin.Context) {
	ghostKey := util.GetEnvDefault("GHOST_KEY", "")
	blogPosts, err := control.RetrieveBlogPosts(ghostKey);
    if err != nil {
        c.String(http.StatusInternalServerError, "Something went wrong while trying retrieve blog posts: " + err.Error())
        return
    }

	blogPosts, err = control.GetRandomPosts(blogPosts.Posts, 3);
	if err != nil {
        c.String(http.StatusInternalServerError, "Something went wrong while trying get random blog posts: " + err.Error())
        return
    }

    c.JSONP(http.StatusOK, &blogPosts)
}