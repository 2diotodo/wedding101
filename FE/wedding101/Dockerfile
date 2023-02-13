FROM node:18.13.0
WORKDIR /usr/src/app
COPY ./package* /usr/src/app/
RUN npm install
RUN npm install -g serve
COPY ./ /usr/src/app/
RUN npm run build
RUN npm install --save react-helmet
ENTRYPOINT ["serve", "-s", "build"]
