# Use an official node runtime as a parent image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# 安裝 yarn
RUN npm i yarn

COPY ./csl-docs/package*.json ./

# 安裝 docs 相關套件
RUN yarn install

COPY ./csl-docs .

# Build the React app
RUN yarn build

# Set the command to run the server
CMD ["yarn", "serve"]

# Expose port 3000
EXPOSE 3000