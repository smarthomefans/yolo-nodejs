# FROM node:8.16.0-alpine
FROM node:8.16.0
MAINTAINER yaming1106@gmail.com

WORKDIR /yolo-nodejs

COPY . .

RUN apt-get update && \
    # bash npm install && \
    rm -rf /var/lib/apt/lists/*

RUN npm install 

EXPOSE 3000

 CMD npm start