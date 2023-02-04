FROM node:18.13.0

WORKDIR /usr/src/app

COPY ./package* /usr/src/app/

RUN npm install

COPY ./ /usr/src/app/

CMD ["npm", "run", "start"]
