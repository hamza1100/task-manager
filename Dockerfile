FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Copy package json to current working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose a port
EXPOSE 8080

CMD [ "npm", "run", "watch"]