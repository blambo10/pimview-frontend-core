FROM node:latest as build

WORKDIR /app
COPY . ./

RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY bootstrap.sh /usr/share/nginx/html/bootstrap.sh

RUN chmod +x /usr/share/nginx/html/bootstrap.sh
# RUN /usr/share/nginx/html/bootstrap.sh
# CMD [ "/bin/sh", "-c", "/usr/share/nginx/html/bootstrap.sh && nginx -g \"daemon off;\"" ]