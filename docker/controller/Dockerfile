FROM node:10.15.3-alpine

WORKDIR /usr/src/app

ADD package*.json ./
ADD nodemon.json ./

ADD src ./src

RUN npm i
RUN npm install dotenv --global

USER node