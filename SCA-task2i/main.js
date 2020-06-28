const btn=document.getElementById("btn");
const colorCode=document.getElementById("colorCode");
btn.addEventListener('click',()=>{
const randomColor=Math.floor(Math.random()*16777216).toString(16);
 document.body.style.backgroundColor='#'+randomColor;
 colorCode.innerHTML="#"+randomColor;

});
