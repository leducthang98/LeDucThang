node version: >=16.16.0

# steps:
1. start mysql:
    `docker-compose up mysql -d`
2. migrate command:
    `yarn typeorm:migrate`
3. copy .env:
    `cp .env.example .env`
4. build backend:
    `yarn build`
5. start backend:
    `node dist/server.js`