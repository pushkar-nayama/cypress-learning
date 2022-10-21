# pull image
#FROM cypress/browsers:node16.17.1-chrome106-ff105-edge
FROM node:18.10.0

# Make directory inside container
RUN mkdir /cypress-automation
WORKDIR /cypress-automation

COPY . .

RUN apt-get update
RUN apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN apt install default-jre -y 
RUN apt-get install chromium -y
# install dependencies
RUN npm install

# run the scripts
CMD ["npm","run","test:chromium"]