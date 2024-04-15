let incr=document.querySelector('#addition');
let decr=document.querySelector('#substraction');
let reset=document.querySelector('#reset');
let input=document.querySelector('#input-box');
let setValue=document.querySelector('#setValue');
let value=input.value;
reset.addEventListener('click',()=>{
setValue.innerText=0;
})
input.addEventListener('change',(e)=>{
    value=input.value;
});
incr.addEventListener('click',()=>{
    calc("+",value);
});
decr.addEventListener('click',()=>{
    calc("-",value);
});
function calc(msg,value){
let val=setValue.innerText
 v=parseInt(val);
if(msg=="+"){
    v=v+parseInt(value);
    setValue.innerText=v;
}
else {
    v=v-parseInt(value);
    setValue.innerText=v;
}
}
