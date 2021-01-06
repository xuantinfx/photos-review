FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install

COPY . /usr/src/app

RUN yarn build

EXPOSE 3003
CMD [ "yarn", "start" ]
