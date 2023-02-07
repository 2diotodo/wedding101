FROM nginx:latest

COPY ./.conf /etc/nginx/conf.d
COPY ./build /usr/share/nginx/html
CMD ["rm", "/etc/nginx/conf.d/default.conf"]