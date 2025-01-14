import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - DeleteById', () => {
  
  it('Apagar registro', async () => {

    const resp1 = await testServer
      .post('/cidades')
      .send({name: 'Santa Luzia'});

    expect(resp1.statusCode).toEqual(StatusCodes.CREATED);

    const respApagada = await testServer
      .delete(`/cidades/${resp1.body}`)
      .send();

    expect(respApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    
  });

  it('Tentar apagar registro inexistente', async () => {
    
    const resp1 = await testServer
      .delete('/cidades/99999')
      .send();

    expect(resp1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(resp1.body).toHaveProperty('errors.default');
  });
});