FROM hypriot/rpi-node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && \
  apt-get install --no-install-recommends --no-install-recommends -y netcat && \
  apt-get autoremove -y && \
  rm -rf /var/lib/apt/lists/*

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
COPY hs100.sh /hs100.sh

EXPOSE 80
CMD [ "npm", "start" ]
