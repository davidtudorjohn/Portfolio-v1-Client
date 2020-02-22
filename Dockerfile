FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --verbose
COPY . .
RUN npm run build --verbose

FROM nginx:latest
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]