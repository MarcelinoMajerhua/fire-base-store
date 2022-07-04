FROM node:14-alpine3.15
WORKDIR /app
COPY package*.json /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
