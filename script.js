// slider
let i=1;
setInterval(()=>{
i++;
if(i>5)i=1;
document.getElementById("slide").src=`https://picsum.photos/900/400?${i}`;
},3000);

// calculator
function calc(){
let c=document.getElementById("complexity").value;
let h=document.getElementById("hours").value;
let price=(c*50)+(h*20);
document.getElementById("result").innerHTML=
"Estimated Cost: $"+price;
}
