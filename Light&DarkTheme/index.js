let check1=document.querySelector('#check1');
let check2=document.querySelector('#check2');
check1.addEventListener('click',()=>{
    let container=document.querySelector('.mainContainer');
    if(check1.checked)
    {
    container.classList.add('darkTheme');
    check2.checked=true;
    }
    else
    {
        container.classList.remove('darkTheme');
        check2.checked=false;
    }
    
})
