let SectionsLinks = document.querySelectorAll('.SectionsNa a');
SectionsLinks.forEach((e)=>{
  e.addEventListener('click',()=>{
    SectionsLinks.forEach((e)=>{
      e.classList.remove('active');
    })
    e.classList.add('active');
  })
})