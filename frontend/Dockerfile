FROM node:latest AS frontend-builder
WORKDIR /opt/Portfolio
COPY ./frontend .
RUN npm install
RUN npm run build

FROM abiosoft/caddy
COPY ./Caddyfile /etc/Caddyfile
COPY --from=frontend-builder /opt/Portfolio/build /srv