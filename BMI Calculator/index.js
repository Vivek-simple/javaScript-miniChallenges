let height=document.querySelector('.height');
let weight=document.querySelector('.weight');
let val1,val2;
height.addEventListener('change',()=>{
// if(val1.includes('.')){
//     alert("enter rigth value")
// }
val1=(height.value)/100;
})
weight.addEventListener('change',()=>{
val2=weight.value;
    })

document.querySelector('.btn').addEventListener('click',()=>{
if(val1 && val2){
    let BMI=((val2)/(val1*val1)).toFixed(2);
    document.querySelector('.bmi').innerText=BMI;
}
else{
    alert("hii")
}

});