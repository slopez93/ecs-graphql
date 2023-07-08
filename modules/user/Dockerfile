# Build stage
FROM node:16-alpine AS development
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 80
CMD ["node", "build/server.js"]