FROM node:18.13.0

WORKDIR /usr/src/app

COPY ./package* /usr/src/app/

RUN npm install

COPY ./ /usr/src/app/

EXPOSE 3000

RUN npm run build
RUN serve -s build

CMD ["/bin/bash"]
