import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

  it('Criar registro', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({name: 'Santa Luzia'});

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Criar registro com nome curto', async () => {
    
    const res1 = await testServer
      .post('/cidades')
      .send({name: 'SA'});

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.name');
  });

  it('Criar registro sem nome', async () => {
    
    const res1 = await testServer
      .post('/cidades')
      .send({});

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.name');
  });
});