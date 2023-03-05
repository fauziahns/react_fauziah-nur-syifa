const form = document.getElementById('form_product');
const productName = document.getElementById('products');
const productCategory = document.getElementById('option');
const productImage = document.getElementById('formFile');
const productDescription = document.getElementById('description');
const productPrice = document.getElementById('price');
const productFreshness = document.getElementsByClassName('product_freshness');
const submit = document.querySelector('#submit');
const input = document.querySelectorAll('#input');

submit.addEventListener('click', function (event) {
  try {
    console.log('berhasil');
    const name = document.getElementById('products').value;
    const category = document.getElementById('option').value;
    const file = document.getElementById('formFile').value;
    const description = document.getElementById('description').value;
    const freshness = document.getElementsByClassName('product_freshness').value;
    const price = document.getElementById('price').value;

    if (productName.value.length > 25) alert('Last Name must not exceed 25 characters.');

    if (productName.value.length == 0 && productPrice.value.length == 0) alert('Please enter a valid Product Name.');

    if (productName.value.match(/[\#\{\}\@\/\(\)]/g) !== null) alert('Product name must not contain symbol.');

    // validation field must be filled in

    if (productCategory.selectedIndex == 0) alert('The Category Field Must be Filled In');

    if (productImage.value == '') alert('The Image Field Must be Filled In');

    if (productDescription.value.length == 0) alert('The Description Field Must be Filled In');

    if (productPrice.value.length == 0) alert('The Price Field Must be Filled In');

    if (productFreshness.value == '') alert('The Freshness Field Must be Filled In');

    // add data to table

    const tabel = document.getElementById('dataProduct');
    const row = tabel.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell1.innerHTML = name;
    cell2.innerHTML = category;
    cell3.innerHTML = file;
    cell4.innerHTML = freshness;
    cell5.innerHTML = description;
    cell6.innerHTML = price;
  } catch (error) {
    console.error(error);
  }
});
