FROM node:20-alpine 

WORKDIR /usr/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "server"]