package util

import (
	"os"

	"github.com/asim/go-micro/v3/util/log"
)

func GetEnvDefault(env, defVal string) string {
	val := os.Getenv(env)
	if len(val) == 0 {
		log.Debug("Using default value for " + env)
		val = defVal
	}

	return val
}

func SliceContains(s []string, str string) bool {
	for _, v := range s {
		if v == str {
			return true
		}
	}

	return false
}