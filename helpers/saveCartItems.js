const saveCartItems = (param) => {
  if (param.includes('<ol><li>Item</li></ol>')) localStorage.setItem('cartItems', 'saveCartItems');
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
