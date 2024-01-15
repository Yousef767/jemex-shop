
let email = document.getElementById('email');
let captcha = document.getElementById('captcha_code');
let sendform = document.getElementById('send-form');

sendform.addEventListener('submit',(e)=>{
  e.preventDefault();
  let api_response = true;
  if(api_response){
    showMessage('Code Send','Success');
  }else{
    showMessage('Email Not Registered','Failed');
  }
})
