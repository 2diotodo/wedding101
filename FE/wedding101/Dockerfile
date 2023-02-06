FROM node:18.13.0

WORKDIR /usr/src/app

COPY ./package* /usr/src/app/

RUN cd ./FE/wedding101
RUN npm install
RUN npm run build
RUN npm install -g serve
RUN serve -s build

EXPOSE 3000

CMD ["/bin/bash"]
