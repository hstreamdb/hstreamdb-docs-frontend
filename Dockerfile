FROM node:14.15.4-slim
COPY . /app
WORKDIR /app
RUN yarn install
EXPOSE 8080
CMD [ "yarn", "dev" ]
