# build
FROM node:alpine as builder

# diretório alvo
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

# copiar o projeto, instalar os pacotes com o npm e gera o build
COPY . /usr/src/frontend/
RUN npm install 
RUN npm run build

# deploy
FROM nginx:alpine

# limpando configurações iniciais do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiando o build do angular para o nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/frontend/dist/frontend /usr/share/nginx/html/

# Rodando o nginx
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
