FROM node:18-alpine

WORKDIR /var/www/app/

# Bundle APP files
COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
CMD [ "pnpm", "start:prod" ]
