FROM golang:1.15.0-buster AS backend-builder
WORKDIR /opt/Portfolio
COPY ./backend .
RUN go build -o portfolio_bin

FROM debian:buster
WORKDIR /opt/Portfolio
COPY --from=backend-builder /opt/Portfolio/portfolio_bin ./backend/portfolio_bin

ENV GIN_MODE=release
CMD ["/opt/Portfolio/backend/portfolio_bin"]