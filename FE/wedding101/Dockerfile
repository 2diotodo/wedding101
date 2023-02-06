FROM node:18.13.0

# 작업 폴더를 만들고 npm 설치
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . .
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent


#ENV CHOKIDAR_USEPOLLING=ture
EXPOSE 3000
CMD ["npm", "run", "start"]
