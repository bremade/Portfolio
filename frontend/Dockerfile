FROM node:12.16.2 AS frontend-builder
WORKDIR /opt/Portfolio
COPY ./frontend .
RUN npm install
RUN npm run build

FROM abiosoft/caddy
EXPOSE 80
EXPOSE 443
COPY ./Caddyfile /etc/Caddyfile
COPY ./data /root/.caddy
COPY --from=frontend-builder /opt/Portfolio/public /srv