require('../mocks/fetchSimulator');
const { fetchItem, getFetch } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função;', async () => {
    expect.assertions(1);
    await expect(typeof (fetchItem )).toEqual('function');
  })

  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada' , async () => {
    fetchItem('MLB1615760527');
    await expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
    expect.assertions(1);

    await fetchItem('MLB1615760527');
    const getEndPoint = getFetch('MLB1615760527');
    expect(fetch).toBeCalledWith(getEndPoint);
  })

  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    expect.assertions(1);

    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  })

  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })

});
