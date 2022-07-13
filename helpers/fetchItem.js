const fetchItem = async (productId) => {
 try {
  const URL = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(URL);
  const results = await response.json();
  return results;
 } catch (error) {
    return error;
 }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
