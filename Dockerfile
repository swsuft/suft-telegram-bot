FROM node:12

EXPOSE 8080

COPY / /workspace
WORKDIR /workspace

RUN npm install
RUN npm run build

VOLUME ["/logs"]

CMD ["node", "./dist/index.js"]
