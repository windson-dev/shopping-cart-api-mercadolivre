const fetchItem = async (endPoint) => {
  try {
    const url = `https://api.mercadolibre.com/items/${endPoint}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
