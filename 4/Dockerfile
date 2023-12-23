FROM node:20-alpine3.18

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 18080

CMD ["node", "index.js"]