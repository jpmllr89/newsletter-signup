const submit = document.getElementById('submit-btn');
let email;
const successModal = document.getElementsByClassName('success-modal')[0];
console.log(submit);
const container = document.getElementsByClassName('container')[0];
let emailModal = document.querySelector('#email-input');
let input = document.getElementById('email');
console.log(emailModal.textContent)
const dismiss = document.getElementById('dismiss');

dismiss.addEventListener('click', (e) => {
  e.preventDefault();
  successModal.classList.add('hide');
  container.classList.remove('hide');
  input.value = '';
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    email = input.value;
    console.log(email)
    let re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      return;
    }else{
      container.classList.add('hide');
      successModal.classList.remove('hide');
      emailModal.textContent = email;
    };
})


