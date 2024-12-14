let tabBtnAll = document.querySelectorAll('.tab-btn');
let contentAll = document.querySelectorAll('.content');
tabBtnAll.forEach((tabBtn) => {
  tabBtn.addEventListener("click", (e)=> {
     tabBtnAll.forEach(btn=> {
        btn.classList.remove('active')
     });

     e.target.classList.add('remove');
     contentAll.forEach(content => {
        content.classList.remove('active'); 
      })
    const id = e.target.dataset.id;
    const targetContent = document.getElementById(id);
    targetContent.classList.add('active');

  })
})