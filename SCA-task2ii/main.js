const Quote=["Love For All","Hatred For None","Change the world by being yourself","Whatever you do, do it well",
"Every moment is a fresh beginning.","Never regret anything that made you smile.","Die with memories, not dreams.",
"Aspire to inspire before we expire.","What we think, we become. ","Everything you can imagine is real.",
"Simplicity is the ultimate sophistication."];
// console.log(randomQuote.length);
const btn=document.getElementById("btn");
const content=document.getElementById("content");
btn.addEventListener('click',()=>{
    randomNo=Math.floor(Math.random() * Quote.length);
    content.innerHTML='"'+Quote[randomNo]+'"';
});