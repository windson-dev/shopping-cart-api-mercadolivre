const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const value = document.querySelector('.cart__items');

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(value.innerHTML);
};

const removeAllItensInCartList = () => {
  const getRemove = document.querySelector('.empty-cart');
  getRemove.addEventListener('click', () => {
    value.innerText = ' ';
  });
};

const addTotalPrice = async (salePrice) => {
  const getCartTotalPrice = document.querySelector('.total-price').innerText;
  const newNumber = Number(getCartTotalPrice);
  const sum = newNumber + Number(salePrice);
  document.querySelector('.total-price').innerText = sum;
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  addTotalPrice(salePrice);
  return li;
};

const addItensInCart = async (itemID) => {
  const getAddCartButton = document.querySelector('.cart__items');
  const getItensID = getSkuFromProductItem(itemID);
  const { id: sku, title: name, price: salePrice } = await fetchItem(getItensID);
  const addItemsInCart = createCartItemElement({ sku, name, salePrice });
  getAddCartButton.appendChild(addItemsInCart);
  saveCartItems(value.innerHTML);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  
  const createButtonClick = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  createButtonClick.addEventListener('click', () => addItensInCart(section));
  section.appendChild(createButtonClick);
  saveCartItems(value.innerHTML);
  return section;
};

const createDynamicItensList = async () => {
  const getItems = document.querySelector('.items');
  const data = await fetchProducts('computador');

  data.results.forEach((element) => {
    const objectListenner = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    
    const createObjectProductItems = createProductItemElement(objectListenner);
    getItems.appendChild(createObjectProductItems);
  });
};

const removeItensListAfterReloadPage = () => {
  const getCartItemList = document.querySelectorAll('.cart__item');
  getCartItemList.forEach((element) => element.addEventListener('click', cartItemClickListener));
};

window.onload = () => {
  createDynamicItensList();
  addItensInCart();
  value.innerHTML = getSavedCartItems();
  removeItensListAfterReloadPage();
  removeAllItensInCartList();
};
