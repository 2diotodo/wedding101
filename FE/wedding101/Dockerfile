FROM nginx:latest
COPY ./build /usr/share/nginx/html
CMD ["rm", "/etc/nginx/conf.d/default.conf"]
COPY ./default.conf /etc/nginx/conf.d/
