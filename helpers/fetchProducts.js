const getFetch = (endPoint) => `https://api.mercadolibre.com/sites/MLB/search?q=${endPoint}`

const fetchProducts = async (computador) => {
  
  try {
    const url = getFetch(computador);
    const result = await fetch(url);
    const data = await result.json();
    return data
  } catch (error) {
    throw new Error('You must provide an url');
  }
};


if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    getFetch,
  };
}
