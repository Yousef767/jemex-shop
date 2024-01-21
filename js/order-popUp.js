let cancel = document.querySelectorAll('#cancel');
let popUpCx = document.querySelectorAll('.popUpCx');
let orderView = document.querySelectorAll('#orderView');
let popUp3 = document.getElementById('pop3');

cancel.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUpCx.forEach((e)=>{e.style.display='none'});
  })
})

orderView.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUpCx.forEach((e)=>{e.style.display='flex'});
  })
})

