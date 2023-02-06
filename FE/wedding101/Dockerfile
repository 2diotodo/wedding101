FROM node:18.13.0

WORKDIR /usr/src/app

COPY ./package* /usr/src/app/

RUN npm install
RUN npm run build
RUN serve -s build

COPY ./ /usr/src/app/

EXPOSE 3000

CMD ["/bin/bash"]
