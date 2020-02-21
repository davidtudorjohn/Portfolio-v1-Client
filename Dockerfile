FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --verbose
COPY . .
# RUN npm build --verbose
EXPOSE 3000
CMD ["npm", "start"]