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
WORKDIR /usr/share/nginx/html

# limpando configurações iniciais do nginx
RUN rm -rf ./*
#RUN rm -rf /usr/share/nginx/html/*

# Copiando o build do angular para o nginx
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/frontend/dist/frontend .


# abrindo a porta 80
EXPOSE 80

# Rodando o nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]