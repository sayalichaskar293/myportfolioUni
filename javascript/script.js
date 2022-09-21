const n= document.getElementById('name');
const email= document.getElementById('email');
const pnumber= document.getElementById('number');
const subject= document.getElementById('subject');
const form= document.getElementById('form');
const errorElementn =document.getElementById('error1');
const errorElemente =document.getElementById('error2');
const errorElementnum =document.getElementById('error3');



form.addEventListener('submit', function(event){
 
    let message=[];
    if( n.value==="" || n.value== null)
    {
       message.push('This field is required.'); 
       event.preventDefault();
       errorElementn.innerText = message[0];
    }

    if( n.value==="" || email.value== null)
    {
       message.push('This field is required.'); 
       event.preventDefault();
       errorElemente.innerText = message[0];
    }

    if(n.value==="" || pnumber.value== null)
    {
       message.push('This field is required.'); 
       event.preventDefault();
       errorElementnum.innerText = message[0];
    }


    if(email.value.length>25)
    {
       message.push('Email is too long'); 
       event.preventDefault();
       errorElemente.innerText = message[0];
    }


    if(pnumber.value.length != 10)
    {
       message.push('Phone number should be of 10 digits'); 
       event.preventDefault();
       errorElementnum.innerText = message[0];
    }


    if(isNaN(pnumber.value))
    {
       message.push('Only digits allowed.'); 
       event.preventDefault();
       errorElementnum.innerText = message[0];
    }


})


   
