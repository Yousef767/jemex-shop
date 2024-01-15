let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let confirm_password = document.getElementById('confirm-password');
let captcha = document.getElementById('captcha_code');
let signupform = document.getElementById('signup-form');

signupform.addEventListener('submit',(e)=>{
  e.preventDefault();
  let api_response = true;
  if(api_response){
    showMessage('Sign Up Succeed','Success');
  }else{
    showMessage('Sign Up Failed','Failed');
  }
})

