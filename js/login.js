let username = document.getElementById('username');
let password = document.getElementById('password');
let captcha = document.getElementById('captcha_code');
let loginform = document.getElementById('login-form');

loginform.addEventListener('submit',(e)=>{
  e.preventDefault();
  let api_response = true;
  if(api_response){
    showMessage('Login Succeed','Success');
  }else{
    showMessage('Login Failed','Failed');
  }
})

