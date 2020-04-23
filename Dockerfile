FROM node:8-alpine

COPY . /api
WORKDIR /api

RUN npm i
RUN npm run build