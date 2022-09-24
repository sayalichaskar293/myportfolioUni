const n = document.getElementById('name');
const email = document.getElementById('email');
const pnumber = document.getElementById('number');
const form = document.getElementById('form');
const errorElementn = document.getElementById('error1');
const errorElemente = document.getElementById('error2');
const errorElementnum = document.getElementById('error3');



form.addEventListener('submit', function (event) {


   if (n.value === "" ) {
      event.preventDefault();
      errorElementn.innerHTML = 'This field is compulsory.';
   }

   if (email.value === "" ) {
      event.preventDefault();
      errorElemente.innerText = 'This field is compulsory.';
   }

   if (email.value.length > 25) {
      event.preventDefault();
      errorElemente.innerText = 'Email is too long';
   }

   if (isNaN(pnumber.value)) {
      event.preventDefault();
      errorElementnum.innerText = 'Only digits allowed.';
   }

   if (pnumber.value.length != 10) {
         event.preventDefault();
         errorElementnum.innerText = 'Phone number should be of 10 digits'
      }

})

