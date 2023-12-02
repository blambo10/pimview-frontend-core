FROM node:latest as build

WORKDIR /app
COPY . ./

RUN yarn install --frozen-lockfile

RUN chmod +x ./bootstrap.sh
RUN /app/bootstrap.sh

RUN yarn build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
