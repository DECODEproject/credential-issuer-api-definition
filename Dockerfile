FROM node:10.7.0-alpine
WORKDIR /code
COPY generated-api/ .
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
