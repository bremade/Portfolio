package mail

import (
	"bytes"
	"errors"
	"html/template"

	"github.com/bremade/Portfolio/util"
	"gopkg.in/gomail.v2"
)

type MailRequest struct {
    from    string
    to      string
	name	string
	subject string
    body    string
}

func NewMailRequest(from string, name string, body string) *MailRequest{
	return &MailRequest{
		from:		from,
		to:      	"bremauer.jan2@gmail.com",
		name:		name,
		subject: 	"Message from Website bremauer.cc",
		body:    	body,
	}
}

func (mr *MailRequest) SendMail() error {
    mailUsername := util.GetEnvDefault("MAIL_USERNAME", "")
	mailPassword := util.GetEnvDefault("MAIL_PASSWORD", "")
	if mailUsername == "" || mailPassword == "" {
		return errors.New("Contact is currently disabled.")
	}

	templateData := struct {
		Name	string
		Mail	string
		Message string
	}{
		Name: mr.name,
		Mail:  mr.from,
		Message: mr.body,
	}

	err := mr.parseTemplate("./mail/templates/main.html", templateData)
	if err != nil {
		return err
	}

    message := gomail.NewMessage()
    message.SetHeader("From", message.FormatAddress(mr.from, mr.name))
    message.SetHeader("To", mr.to)
    message.SetHeader("Subject", mr.subject)
    message.SetBody("text/html", mr.body)

    dialer := gomail.NewDialer("smtp.gmail.com", 587, mailUsername, mailPassword)

    // Send mail
    return dialer.DialAndSend(message)
}

func (mr *MailRequest) parseTemplate(templateFileName string, data interface{}) error {
	t, err := template.ParseFiles(templateFileName)
	if err != nil {
		return err
	}
	buf := new(bytes.Buffer)
	if err = t.Execute(buf, data); err != nil {
		return err
	}
	mr.body = buf.String()
	return nil
}
