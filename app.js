var firebaseConfig = {
  apiKey: "AIzaSyBRUIfA58fZjy02kv0-Qkbno3VHUppZUWY",
  authDomain: "formy-e0904.firebaseapp.com",
  databaseURL: "https://formy-e0904.firebaseio.com",
  projectId: "formy-e0904",
  storageBucket: "formy-e0904.appspot.com",
  messagingSenderId: "671413291583",
  appId: "1:671413291583:web:0d004d2b289f0f70aec68a",
  measurementId: "G-034ETTTNKL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let user = firebase.database().ref("infos");

const form = document.querySelector('form')
const info = document.querySelector('.info')
const body = document.querySelector('body')
const alert = document.querySelector('.alert')

const username= document.querySelector('#username')
const firstName= document.querySelector('#firstName')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')



//REGEX
const usernamePattern = /^.{6,12}$/;
const firstNamePattern = /^[a-zA-Z]{2,15}$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePattern = /^04(\s?[0-9]{2}\s?)([0-9]{3}\s?[0-9]{3}|[0-9]{2}\s?[0-9]{2}\s?[0-9]{2})$/;



//on submit

form.addEventListener('submit' , e => {
  e.preventDefault()
  
  let username = document.querySelector('#username').value;
  let firstName = document.querySelector('#firstName').value;
  let email =document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value
  saveInfo(username,firstName,email,phone)
  
  if(usernamePattern.test(username) && firstNamePattern.test(firstName) && emailPattern.test(email) && phonePattern.test(phone) ===true){

      body.style.backgroundColor=' rgb(123, 223, 66)';
      body.style.transition = 'all 3s';
     alert.style.display ='block';
     alert.stye.transition ='all 2s'

     
    }else{
      body.style.backgroundColor='tomato';
      body.style.transition = 'all 3s';
      alert.style.display ='none';
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


function saveInfo (username,firstName,email,phone){

  let newUser = user.push();

  newUser.set({
    username : username,
    firstName : firstName,
    email : email,
    phone : phone
  });
}