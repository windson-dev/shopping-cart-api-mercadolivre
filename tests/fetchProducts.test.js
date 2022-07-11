require('../mocks/fetchSimulator');

const { fetchProducts, getFetch } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função ', async () => {
    expect.assertions(1);

    await expect(typeof (fetchProducts)).toEqual('function')
  })

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada ', async () => {
    expect.assertions(1);

    fetchProducts('computador');
    await expect(fetch).toHaveBeenCalledTimes(1);
  })

  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    expect.assertions(1);

    await fetchProducts('computador');
    const getEndPoint = getFetch('computador');
    expect(fetch).toBeCalledWith(getEndPoint);
  })

  it('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    expect.assertions(1);

    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  })

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
});
