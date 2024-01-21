let cancel = document.querySelectorAll('#cancel');
let popUpCx = document.querySelectorAll('.popUpCx');
let popUp1 = document.getElementById('pop1');
let popUp2 = document.getElementById('pop2');
let randomReplace = document.getElementById('randomReplace');
let manual = document.getElementById('manual');

cancel.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUpCx.forEach((e)=>{e.style.display='none'});
  })
})

randomReplace.addEventListener('click',()=>{
  popUp1.style.display='flex';
});

manual.addEventListener('click',()=>{
  popUp2.style.display='flex';
});