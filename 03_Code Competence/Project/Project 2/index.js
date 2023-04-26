const form = document.getElementById('formData');
const cilentName = document.getElementById('name');
const clientEmail = document.getElementById('email');
const projectClient = document.getElementById('project');
const projectDescription = document.getElementById('description');
const submit = document.querySelector('#submit');
const input = document.querySelectorAll('#input');

submit.addEventListener('click', function (event) {
  try {
    console.log('berhasil');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    const description = document.getElementById('description').value;

    // validation field must be filled in
    if (cilentName.value.length == 0) alert('The Name Field Must be Filled In');

    if (clientEmail.value == '') alert('The Email Field Must be Filled In');

    if (projectClient.selectedIndex == 0) alert('The Project Field Must be Filled In');

    if (projectDescription.value.length == 0) alert('The Description Field Must be Filled In');
  } catch (error) {
    console.error(error);
  }
});
