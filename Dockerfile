FROM node:8.16.0-alpine
MAINTAINER yaming1106@gmail.com

WORKDIR /yolo-nodejs

COPY . .

RUN apk add --no-cache make gcc g++ python bash && \
    npm install && \
    apk del make gcc g++ python bash

EXPOSE 3000

CMD npm start
