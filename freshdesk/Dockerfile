FROM node:8.0-alpine AS builder

WORKDIR /app

COPY package.json /app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# Creating tar of productions dependencies
RUN npm install --production && cp -rp ./node_modules /tmp/node_modules

# Copying application code
COPY . /app

FROM node AS runner

EXPOSE 3000
WORKDIR /app

# Adding production dependencies to image
COPY --from=builder /tmp/node_modules /app/node_modules

# Copying application code
COPY . /app

# start the node web server
CMD npm start