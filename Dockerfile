FROM node:18.14.2-alpine

WORKDIR /app

COPY package*.json ./

COPY . ./

ENV NODE_ENV=development

ENV PORT=5000

ENV DB_HOST=localhost

ENV DB=ecommerce

ENV DB_USER=root

ENV DB_PASSWORD=admin

RUN npm install

RUN npm cache clean -f

EXPOSE 5000

CMD ["node", "start"]

