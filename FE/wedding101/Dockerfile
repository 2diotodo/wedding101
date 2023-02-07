FROM nginx:latest
RUN cp ./default.conf /etc/nginx/conf.d/defualt.conf
RUN ls ./
COPY ./build /usr/share/nginx/html
CMD ["rm", "/etc/nginx/default.conf"]
