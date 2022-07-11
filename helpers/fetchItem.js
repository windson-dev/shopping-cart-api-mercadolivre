const getFetch1 = (endPoint) => `https://api.mercadolibre.com/items/${endPoint}`;

const fetchItem = async (endPoint) => {
  try {
    const url = getFetch1(endPoint);
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
    getFetch1,
  };
}
