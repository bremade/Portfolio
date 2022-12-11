package api

import (
	"net/http"

	"github.com/bremade/Portfolio/control"
	"github.com/bremade/Portfolio/model"
	"github.com/gin-gonic/gin"
)

func (api *Api) SendMail(c *gin.Context) {
    var mailRequest model.MailRequest

    err := c.BindJSON(&mailRequest)

    if err != nil {
        c.String(http.StatusBadRequest, "Bad Request: " + err.Error())
        return
    }
    mr := control.NewMailRequest(mailRequest.Email, mailRequest.Name, mailRequest.Message);
    err = mr.SendMail()

    if err != nil {
        c.String(http.StatusInternalServerError, "Something went wrong while trying to send the email: " + err.Error())
        return
    }

    c.JSONP(http.StatusOK, gin.H{ "status": "ok" })
}