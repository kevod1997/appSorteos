"use strict"

let participants = [];






document.getElementById("lastOne").addEventListener("click", deletelastone);
document.getElementById("button").addEventListener("click", add);
document.getElementById("clean").addEventListener("click", reset);
document.getElementById("sorteo").addEventListener("click", sortear);

//Function declared to add new participants into the array

function add(){
let names = document.getElementById("formul");
let nombres = names.value;
participants.push(nombres);
show();
//vacio el input
names.value = "";
   
}


//Function declared to show array

function show(){
let storage = document.getElementById("store");
storage.innerHTML = ""; 
for(let n of participants){
    storage.innerHTML += `<li>${n}</li>`;
} 
     
}


function deletelastone(){
participants.pop();
show();    
}


function reset(){
participants = [];
show();    
} 

function sortear(){
    let winnerSpace = document.getElementById("ganador");
    let random = Math.floor((Math.random() * participants.length));
    let opcion = participants[random];
    winnerSpace.innerHTML = opcion;
}