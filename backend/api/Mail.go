package api

import (
	"net/http"

	"github.com/bremade/Portfolio/mail"
	"github.com/bremade/Portfolio/model"
	"github.com/bremade/Portfolio/util"
	"github.com/gin-gonic/gin"
)




func (api *Api) SendMail(c *gin.Context) {
    var mailRequest model.MailRequest

    err := c.BindJSON(&mailRequest)

    if err != nil {
        c.String(http.StatusBadRequest, "Bad Request: " + err.Error())
        return
    }

    clientSecret := util.GetEnvDefault("CAPTCHA_SECRET", "")
    err = util.CheckRecaptcha(clientSecret, mailRequest.Token);

    if err != nil {
        c.String(http.StatusBadRequest, "Captcha token is invalid")
        return
    }

    mr := mail.NewMailRequest(mailRequest.Email, mailRequest.Name, mailRequest.Message);
    err = mr.SendMail()

    if err != nil {
        c.String(http.StatusInternalServerError, "Something went wrong while trying to send the email: " + err.Error())
        return
    }

    c.JSONP(http.StatusOK, gin.H{ "status": "ok" })
}