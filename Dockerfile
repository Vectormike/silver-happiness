FROM node:14

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000