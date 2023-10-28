// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Calculate the product of quantity and price 
  // and display it in the <span> of class .subtotal

// 1. Target the element which contains the price and store the value in a variable
const priceElement = product.querySelector('.price');
const price = Number(priceElement.firstChild.nextSibling.innerText);
console.log('priceElement',  Number(priceElement.firstChild.nextSibling.innerText))
// 2. Target the element which contains the quantity and store the value in a variable
const quantityElement = product.querySelector('.quantity');
console.log('quantityElement', Number(quantityElement.firstChild.nextSibling.value))
const quantity = Number(quantityElement.firstChild.nextSibling.value)
// 3. Calculate the product of price and quantity
const subtotal = price * quantity;
console.log('subtotal', subtotal)
// 4. Target the element where I want to display the product result and replace the content with the value
const subtotalElement = product.querySelector('.subtotal')  
subtotalElement.firstChild.nextSibling.innerText = `${subtotal}`;
}

function calculateAll() {

  //Hint: Start with getting the DOM nodes for each product row. 
  // Currently, we have two products; thus, we have two rows with the class
  // product. Maybe using getElementsByClassName could serve well here.
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // Calculate all the subtotals 

  // 1. Target all the existing <tr class="products">
  const productsElement = document.getElementsByClassName('product');
  console.log('productsElement', productsElement);
  const copyOfProductsElement = [...productsElement];
  console.log('copyOfProductsElement', copyOfProductsElement);
  // 2. Calculate the subtotal for each of the existing  <tr class="products">
  // 3. Display the result to each corresponding <td class="subtotal">$<span>0</span></td>
  copyOfProductsElement.map(product => {
    updateSubtotal(product)
  })
  



  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
