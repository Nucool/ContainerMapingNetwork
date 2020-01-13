FROM node:12-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . ./

CMD ["node","src/index.js"]