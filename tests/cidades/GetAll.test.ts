import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {
  it('Buscar todos os resgistros', async () => {
    
    const resp1 = await testServer
      .post('/cidades')
      .send({name: 'Santa Luzia'});

    expect(resp1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/cidades')
      .send();

    expect(Number(resBuscada.headers['x-total-count'])).toBeGreaterThan(0);  
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});