ARG NODE_VERSION=node:20-alpine

FROM ${NODE_VERSION} AS development
WORKDIR /usr/src/app
RUN apk add --no-cache openssl
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npx prisma generate
USER node

FROM ${NODE_VERSION} AS build
WORKDIR /usr/src/app
RUN apk add --no-cache openssl
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build
ENV NODE_ENV production
RUN npm ci --omit=dev && npm cache clean --force
USER node

FROM ${NODE_VERSION} AS production
RUN apk add --no-cache openssl
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node .env ./
CMD ["node", "dist/src/main.js"]
