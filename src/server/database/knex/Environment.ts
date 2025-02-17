import { Knex } from 'knex';
import path from 'path';


export const dev: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname, '..','migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, '..','seeds')
  },
  pool: {
    afterCreate: (connection: any, done: Function) => {
      connection.run('PRAGMA foreign_keys = ON');
      done();
    }
  },
};

export const test = {
  ...dev,
  connection: ':memory:',
};
export const prod = {
  ...dev,
};