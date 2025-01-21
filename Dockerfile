FROM node:18

WORKDIR /kafka-todo

COPY package*.json ./

RUN yarn

COPY . .

ENV PORT=3020
ENV MYSQL_HOST=localhost
ENV MYSQL_PORT=3306
ENV MYSQL_USER=root
ENV MYSQL_PASS='ben@newton#1996#'
ENV MYSQL_DATABASE=todos

EXPOSE 3020

CMD ["yarn", "dev"]