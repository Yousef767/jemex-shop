let cancel2 = document.querySelectorAll('#pop3 #cancel');
let popUpCx2 = document.querySelectorAll('#pop3.popUpCx');
let orderView2 = document.querySelectorAll('#orderView2');
let popUp3 = document.getElementById('pop3');

cancel2.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUpCx2.forEach((e)=>{e.style.display='none'});
  })
})

orderView2.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUpCx2.forEach((e)=>{e.style.display='flex'});
  })
})

