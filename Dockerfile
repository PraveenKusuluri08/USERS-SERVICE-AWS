FROM node:16-alpine

WORKDIR /myapps/user-service-aws

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD ["node","index.js"]