const saveCartItems = (items) => {
  localStorage.setItem('cartItem', JSON.stringify(items));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
