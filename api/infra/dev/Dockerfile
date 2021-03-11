FROM node:14-alpine
LABEL description="api"
WORKDIR /code

ADD package.json .
RUN yarn install --ignore-optional
COPY . .
EXPOSE 3000

CMD [ "./node_modules/.bin/nodemon", "--exec", "ts-node", "src/index.ts"]
