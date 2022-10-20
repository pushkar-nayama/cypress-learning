# pull image
FROM node:18.10.0

# Make directory inside container
RUN mkdir /cypress-automation
COPY . /cypress-automation

# install dependencies
RUN npm install
RUN npm install chrome -g 

# run the scripts
CMD ["npm","run","tests"]