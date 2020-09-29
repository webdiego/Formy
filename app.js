const form = document.querySelector('form')
const info = document.querySelector('.info')
const body = document.querySelector('body')
const usernameBorder= document.querySelector('#username')
const firstNameBorder= document.querySelector('#firstName')
const emailBorder = document.querySelector('#email')


const usernamePattern = /^.{6,12}$/;
const firstNamePattern = /^[a-zA-Z]{2,15}$/
const emailPattern = 	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



const all = [
  usernamePattern.test(username.value) ,
  firstNamePattern.test(firstName.value),
  emailPattern.test(email.value) 

]

//on submit

form.addEventListener('submit' , e => {
  e.preventDefault()

   
  const username= form.username.value;
  const firstName = form.firstName.value;

  if(all){

      body.style.backgroundColor=' rgb(123, 223, 66)';
      body.style.transition = 'all 3s'
  }else{
    body.style.backgroundColor='tomato';
    body.style.transition = 'all 3s'
  }
  


})



//on typing
form.username.addEventListener('keyup' , e=>{


  if(usernamePattern.test(username.value) ){
    usernameBorder.style.borderColor ="#43aa8b" ,
    usernameBorder.style.borderRadius="50px" 
    usernameBorder.style.transition= "all 1s"
    usernameBorder.style.backgroundColor="#43ca8b"
  }else{
      usernameBorder.style.borderColor ="#e63946"
      usernameBorder.style.borderRadius="10px" 
      usernameBorder.style.transition= "all 1s"
      usernameBorder.style.backgroundColor="tomato"

    }



})



form.firstName.addEventListener('keyup' , e=>{


  if(firstNamePattern.test(firstName.value) ){
    firstNameBorder.style.borderColor ="#43aa8b" ,
    firstNameBorder.style.borderRadius="50px" 
    firstNameBorder.style.transition= "all 1s"
    firstNameBorder.style.backgroundColor="#43ca8b"
  }else{
      firstNameBorder.style.borderColor ="#e63946"
      firstNameBorder.style.borderRadius="10px" 
      firstNameBorder.style.transition= "all 1s"
      firstNameBorder.style.backgroundColor="tomato"

    }



})

form.email.addEventListener('keyup' ,e =>{ 


  if(emailPattern.test(email.value) ){
    emailBorder.style.borderColor ="#43aa8b" ,
    emailBorder.style.borderRadius="50px" 
    emailBorder.style.transition= "all 1s"
    emailBorder.style.backgroundColor="#43ca8b"
  }else{
      emailBorder.style.borderColor ="#e63946"
      emailBorder.style.borderRadius="10px" 
      emailBorder.style.transition= "all 1s"
      emailBorder.style.backgroundColor="tomato"

    }



})