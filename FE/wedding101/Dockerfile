FROM node:latest

WORKDIR /usr/src/app

COPY ./package* /usr/src/app/

RUN npm install

COPY ./ /usr/src/app/

EXPOSE 80
EXPOSE 443

CMD ["npm", "run", "build"]
