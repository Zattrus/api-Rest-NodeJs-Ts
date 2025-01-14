import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetById', () => {

  it('Busca registro por id', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({name: 'Santa Luiza'});

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBucada = await testServer
      .get(`/cidades/${res1.body}`)
      .send();

    expect(resBucada.statusCode).toEqual(StatusCodes.OK);
    expect(resBucada.body).toHaveProperty('name');
  });
  it('Tenta bsucar registro que não existe', async () => {

    const res1 = await testServer
      .get('/cidades/99999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});