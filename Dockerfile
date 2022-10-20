# pull image
FROM node:18.10.0

# Make directory inside container
RUN mkdir /cypress-automation
WORKDIR /cypress-automation
COPY . /cypress-automation
RUN apt-get update
RUN apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
# install dependencies
RUN npm install
RUN npm install chrome -g 

# run the scripts
CMD ["npm","run","docker:tests"]