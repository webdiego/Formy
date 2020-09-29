const form = document.querySelector('form')
const info = document.querySelector('.info')
const body = document.querySelector('body')

const username= document.querySelector('#username')
const firstName= document.querySelector('#firstName')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')



const usernamePattern = /^.{6,12}$/;
const firstNamePattern = /^[a-zA-Z]{2,15}$/
const emailPattern = 	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const phonePattern = /^04(\s?[0-9]{2}\s?)([0-9]{3}\s?[0-9]{3}|[0-9]{2}\s?[0-9]{2}\s?[0-9]{2})$/



const all = [
  usernamePattern.test(username.value) ,
  firstNamePattern.test(firstName.value),
  emailPattern.test(email.value) 

]

//on submit

form.addEventListener('submit' , e => {
  e.preventDefault()

  if(usernamePattern.test(username.value) && firstNamePattern.test(firstName.value) && emailPattern.test(email.value) ===true){

      body.style.backgroundColor=' rgb(123, 223, 66)';
      body.style.transition = 'all 3s';
     
  }else{
    body.style.backgroundColor='tomato';
    body.style.transition = 'all 3s'
  }
  


})



//on typing
form.username.addEventListener('keyup' , e=>{


  if(usernamePattern.test(username.value) ){
    username.style.borderColor ="#43aa8b" ,
    username.style.borderRadius="50px" 
    username.style.transition= "all 1s"
    username.style.backgroundColor="#43ca8b"
  }else{
      username.style.borderColor ="#e63946"
      username.style.borderRadius="10px" 
      username.style.transition= "all 1s"
      username.style.backgroundColor="tomato"
    }



})



form.firstName.addEventListener('keyup' , e=>{


  if(firstNamePattern.test(firstName.value) ){
    firstName.style.borderColor ="#43aa8b" ,
    firstName.style.borderRadius="50px" 
    firstName.style.transition= "all 1s"
    firstName.style.backgroundColor="#43ca8b"
  }else{
      firstName.style.borderColor ="#e63946"
      firstName.style.borderRadius="10px" 
      firstName.style.transition= "all 1s"
      firstName.style.backgroundColor="tomato"

    }



})

form.email.addEventListener('keyup' ,e =>{ 


  if(emailPattern.test(email.value) ){
    email.style.borderColor ="#43aa8b" ,
    email.style.borderRadius="50px" 
    email.style.transition= "all 1s"
    email.style.backgroundColor="#43ca8b"
  }else{
      email.style.borderColor ="#e63946"
      email.style.borderRadius="10px" 
      email.style.transition= "all 1s"
      email.style.backgroundColor="tomato"

    }



})

form.phone.addEventListener('keyup' ,e =>{ 


  if(phonePattern.test(phone.value) ){
    phone.style.borderColor ="#43aa8b" ,
    phone.style.borderRadius="50px" 
    phone.style.transition= "all 1s"
    phone.style.backgroundColor="#43ca8b"
  }else{
      phone.style.borderColor ="#e63946"
      phone.style.borderRadius="10px" 
      phone.style.transition= "all 1s"
      phone.style.backgroundColor="tomato"

    }



})

