FROM node:12.7.0-alpine

WORKDIR /usr/server

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3500

CMD ["npm", "start"]