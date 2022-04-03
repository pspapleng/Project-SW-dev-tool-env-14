FROM node:lts-alpine AS development
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn add @nestjs/cli
RUN yarn install
COPY . .
RUN ["yarn", "run", "build"]

FROM node:lts-alpine AS production
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install --production
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/main"]