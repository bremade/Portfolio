FROM golang:1.15.0-buster AS backend-builder
WORKDIR /opt/Portfolio
COPY ./backend .
RUN go build -o portfolio_bin

FROM alpine:latest as certificates
RUN apk --no-cache --update upgrade && apk --no-cache add ca-certificates

FROM debian:buster
WORKDIR /opt/Portfolio
COPY --from=certificates /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=backend-builder /opt/Portfolio/portfolio_bin ./portfolio_bin
COPY --from=backend-builder /opt/Portfolio/control/templates/main.html ./control/templates/main.html

ENV GIN_MODE=release
CMD ["/opt/Portfolio/portfolio_bin"]