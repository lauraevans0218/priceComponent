FROM node:12.7.0

WORKDIR ' /client/src/Components/IndexComponent/index'

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3500

CMD ["node", "./Server/index.js"]