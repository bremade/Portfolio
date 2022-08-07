package model

import "time"

type CaptchaResponse struct {
    Success		bool		`json:"success"`
	ChallengeTS time.Time	`json:"challenge_ts"`
	Hostname    string		`json:"hostname"`
	ErrorCodes  []string	`json:"error-codes"`
}