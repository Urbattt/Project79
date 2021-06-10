var pizza=["Pizza with meat","Margherita","bbq pizza"];


function addstuff() {
var data;
var item=document.getElementById("additem").value;
pizza.sort();
data="<section class='cards'>"
for(var i=0;i<pizza.length;i++){
data=data+'<div class="card">'
+ '<img src="pizza.jpg">'
+ pizza[i]+'</div>'

}
data=data+"</section>"
document.getElementById("pizzalist").innerHTML=data;
pizza.push(item);

}