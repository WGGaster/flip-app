FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g npm@11 && npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]