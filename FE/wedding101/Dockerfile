FROM nginx:latest
RUN rm /etc/nginx/default.conf 
RUN cp /usr/src/app/default.conf /etc/nginx/conf.d/defualt.conf
COPY ./build /usr/share/nginx/html
