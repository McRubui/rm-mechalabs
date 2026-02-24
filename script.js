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
function animateCounter(id, target){
let count = 0;
let interval = setInterval(()=>{
count++;
document.getElementById(id).innerText = count;
if(count >= target) clearInterval(interval);
},20);
}

window.onload = function(){
animateCounter("counter1",32);
animateCounter("counter2",40);
animateCounter("counter3",100);
};
