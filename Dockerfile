FROM node:18.14.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 5000

CMD ["node", "start"]

