import { knex } from 'knex';
import { dev, prod, test } from './Environment';

const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return prod;
    case 'test':
      return test;
    default:
      return dev;
  }
};
export const Knex = knex(getEnvironment());