FROM node:14-alpine AS build
WORKDIR /code
ADD package.json .
RUN yarn install --ignore-optional
COPY . .
RUN yarn build

FROM node:14-alpine
LABEL description="api"
WORKDIR /code
COPY --from=build /code/dist dist
ADD package.json .
RUN yarn install --production --ignore-optional
EXPOSE 3000
CMD ["node", "dist/index.js"]
