import pg from 'pg';

const { Client } = pg;

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: '615243',
  port: 5432,
});

client.connect();

const createTable = async () => {
    await client.query(`CREATE TABLE IF NOT EXISTS users
    (id serial PRIMARY KEY, name VARCHAR (255) UNIQUE NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL, age INT NOT NULL);`)
};

createTable();

export default client;
