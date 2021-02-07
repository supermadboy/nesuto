FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY ./build .
COPY .env .
ENV NODE_ENV=production
EXPOSE 4000
CMD ["node","index.js"]