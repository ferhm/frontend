FROM node:16 as build
RUN dir
WORKDIR /app
RUN pwd
RUN dir
COPY package*.json /app/
RUN npm install --only=dev
COPY . /app
RUN npm run build --outputPath=./dist/out


FROM httpd:2.4
COPY --from=build /app/dist/out/ /usr/local/apache2/htdocs/
COPY --from=build /app/.htaccess /usr/local/apache2/htdocs/

RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's#AllowOverride [Nn]one#AllowOverride All#' /usr/local/apache2/conf/httpd.conf