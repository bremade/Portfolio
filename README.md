# Repository for my React Website

This is my repository for my Website using React as frontend and GoLang as backend.

## Tech stack

- [React](https://github.com/facebook/react)
- [React Router 4](https://github.com/ReactTraining/react-router)
- [Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [Go](https://github.com/golang/go)

## Deploy lifecycle

### Local

#### Frontend Development - /frontend

For frontend development the package livereload is used to automaticly reload the website on change.

```
npm run start
```

#### Backend Development - /backend

For backend development only the main.go need to be started.

```
go run main.go
```

### Server

#### Environment Variables

| Key               | Type   |
| ----------------- | ------ |
| WEBSITE_PORT      | int    |
| DATABASE_USER     | string |
| DATABASE_PASSWORD | string |
| DATABASE_PORT     | int    |
| MAIL_USERNAME     | string |
| MAIL_PASSWORD     | string |
| GHOST_KEY         | string |

#### Drone

Use Pipeline as deployment

## Author

Jan Bremauer
![Website](https://bremauer.cc)
![LinkedIn](https://www.linkedin.com/in/jan-bremauer-2a603611b/)
