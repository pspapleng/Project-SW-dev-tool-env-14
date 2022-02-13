FROM node:lts-alpine AS builder
RUN mkdir -p /usr/src/front-end
WORKDIR /usr/src/front-end
COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-platform
COPY . .
RUN yarn build

FROM nginx:1.14.2-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /usr/src/front-end/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]