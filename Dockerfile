#Dockerfile to build a container image for this nodejs app

# Use alpine 3.15 as base image

FROM alpine:3.15

# Install nodejs and npm

RUN apk add --no-cache nodejs npm

# Create app directory

WORKDIR /usr/src/app

# Copy package.json and package-lock.json

COPY package*.json ./

# Install app dependencies

RUN npm install

# Bundle app source

COPY . .

# Expose port 5000

EXPOSE 5000

# Run app

CMD [ "npm", "start" ]









