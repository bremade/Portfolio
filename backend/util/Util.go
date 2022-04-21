package util

import (
	"encoding/json"
	"errors"
	"net/http"
	"os"

	"github.com/asim/go-micro/v3/util/log"
	"github.com/bremade/Portfolio/model"
)

func GetEnvDefault(env, defVal string) string {
	val := os.Getenv(env)
	if len(val) == 0 {
		log.Debug("Using default value for " + env)
		val = defVal
	}

	return val
}

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