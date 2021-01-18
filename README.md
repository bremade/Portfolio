# Repository for my React Website
This is my repository for my Website using React as frontend and GoLang as backend.

## Tech stack
* [React](https://github.com/facebook/react)
* [React Router 4](https://github.com/ReactTraining/react-router)
* [Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
* [Go](https://github.com/golang/go)

## Deploy lifecycle

### Local
#### Frontend Development - /frontend
For frontend development the package livereload is used to automaticly reload the website on change.
```
npm run dev  
```
#### Backend Development - /backend
For backend development only the main.go need to be started.
```
go run main.go
```
### Server
#### Transfer the data to the server:
```
rsync -avz /path/to/local/folder user@ip:/path/on/server   
```
#### Setting up Docker Container:
Build start the docker containers.
The following environment variables need to be set:
| Variable          | Description                 |
|-------------------|-----------------------------|
| WEBSITE_PORT      | Port for the go application |
| DATABASE_USER     | Database username to use    |
| DATABASE_PASSWORD | Database password to use    |
| DATABASE_PORT     | Port for the database       |
```
docker-compose build
docker-compose up -d
```

## Author
Jan Bremauer
![Website](https://bremauer.cc)
![LinkedIn](https://www.linkedin.com/in/jan-bremauer-2a603611b/)
