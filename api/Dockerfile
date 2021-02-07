FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY ./build .
COPY .env .
EXPOSE 4000
CMD ["node","index.js"]