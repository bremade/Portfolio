package control

import (
	"encoding/json"
	"errors"
	"net/http"

	model "github.com/bremade/Portfolio/model"
)

func CheckRecaptcha(secret, token string) error {
	const verifyUrl = "https://www.google.com/recaptcha/api/siteverify"

	req, err := http.NewRequest(http.MethodPost, verifyUrl, nil)
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	query := req.URL.Query()
	query.Add("secret", secret)
	query.Add("response", token)
	req.URL.RawQuery = query.Encode()

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	var body model.CaptchaResponse
	if err = json.NewDecoder(resp.Body).Decode(&body); err != nil {
		return err
	}

	if !body.Success {
		return errors.New("ReCaptcha could not be verified.")
	}

	return nil
}