package model

type MailRequest struct {
    Name        string      `json:"name"`
    Email       string     	`json:"email"` 
    Message     string      `json:"message"`
}