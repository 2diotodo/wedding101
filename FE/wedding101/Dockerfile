FROM nginx:latest

COPY ./.conf /usr/share/nginx/
COPY ./build /usr/share/nginx/html
RUN ["mv","/usr/share/nginx/*.conf","/etc/nginx/conf.d"]