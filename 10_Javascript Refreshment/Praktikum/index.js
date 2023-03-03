const form = document.getElementById('form_product');
const productName = document.getElementById('products');
const productCategory = document.getElementById('option');
const productImage = document.getElementById('formFile');
const productDescription = document.getElementById('description');
const productPrice = document.getElementById('price');
const submit = document.querySelector('#submit');
const input = document.querySelectorAll('#input');

console.log('oke');

form.addEventListener('submit', function (event) {
  try {
    // event.preventDefault();
    console.log('berhasil');
    const name = document.getElementById('products').value;
    const category = document.getElementById('option').value;
    const file = document.getElementById('formFile').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    if (productName.value.length > 25) {
      alert('Last Name must not exceed 25 characters.');
    }

    if (productName.value.length == 0 && productPrice.value.length == 0) {
      alert('Please enter a valid Product Name.');
    }
  } catch (error) {
    console.error(error);
  }
});
