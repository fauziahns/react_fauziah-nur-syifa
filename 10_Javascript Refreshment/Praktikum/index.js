const form = document.getElementById('form_product');
const productName = document.getElementById('products');
const productCategory = document.getElementById('option');
const productImage = document.getElementById('formFile');
const productDescription = document.getElementById('description');
const productPrice = document.getElementById('price');
const submit = document.querySelector('#submit');
const input = document.querySelectorAll('#input');

console.log('oke');

submit.addEventListener('click', function (event) {
  try {
    // event.preventDefault();
    console.log('berhasil');
    const name = document.getElementById('products').value;
    const category = document.getElementById('option').value;
    const file = document.getElementById('formFile').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    if (productName.value.length > 25) alert('Last Name must not exceed 25 characters.');

    if (productName.value.length == 0 && productPrice.value.length == 0) alert('Please enter a valid Product Name.');

    // validation field must be filled in

    if (productCategory.selectedIndex == 0) alert('The Category Field Must be Filled In');

    if (productDescription.value.length == 0) alert('The Description Field Must be Filled In');

    if (productPrice.value.length == 0) alert('The Price Field Must be Filled In');
  } catch (error) {
    console.error(error);
  }
});
