FROM node:16.11.0

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm install

COPY . /code/

CMD ["npm", "run", "server"]