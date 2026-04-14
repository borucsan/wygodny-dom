FROM nginx:alpine

RUN apk add --no-cache \
    php83 \
    php83-fpm \
    php83-curl \
    php83-mbstring \
    php83-opcache

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY .output/public /usr/share/nginx/html
COPY docker/entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80
CMD ["/docker-entrypoint.sh"]
