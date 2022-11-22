#same as dockerfile but multi-stage build


FROM alpine:3.15 as builder

RUN apk add --no-cache nodejs npm
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM alpine:3.15

RUN apk add --no-cache nodejs npm
WORKDIR /usr/src/app
# add the .jestrc.json
COPY .jestrc.json ./
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --only=production
#install jest
RUN npm install --save-dev jest
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 5000
CMD [ "npm", "start" ]



