FROM node:latest
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

#TODO issue with react try running commented with explicit react dnd install and see if error can be reproduced. 

RUN yarn install
RUN yarn add react-scripts url
RUN yarn add url
RUN yarn add buffer process
RUN yarn add @mui/material
RUN yarn add @emotion/styled
RUN yarn add -D webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader css-loader

COPY . ./

RUN chmod +x ./bootstrap.sh

CMD ["./bootstrap.sh"]