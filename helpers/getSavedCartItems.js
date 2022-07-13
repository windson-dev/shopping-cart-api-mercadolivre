const getSavedCartItems = () => localStorage.getItem('cartItem');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
