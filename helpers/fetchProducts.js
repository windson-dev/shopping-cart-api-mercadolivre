const fetchProducts = async (query) => {
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const results = await fetch(URL);
    return results;
  } catch (error) { 
    return error;
  }  
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
