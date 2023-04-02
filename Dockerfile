FROM node:14.18.0-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install -timeout=100000

COPY ./ /app
EXPOSE 80
CMD npm run dev
