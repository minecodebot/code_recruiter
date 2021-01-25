FROM node:alpine

ENV PORT 3000

# Create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dep
COPY package.json ./
RUN yarn

# Copu source files
COPY . .

EXPOSE 3000

CMD "yarn" "dev"