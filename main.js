$(document).ready(function(){

    $("#primer p").animate({margin : "30px"},2000);
    



});

console.log("Pocinjemo");



//alert(document.getElementsByClassName("pasus").length);
//document.getElementsByClassName("pasus")[1].innerHTML = "eyyyyyy";
//document.getElementsByClassName("pasus")[2].innerHTML = "oyyyyyy";

document.querySelectorAll(".pasus").innerHTML = "promena";
document.querySelector("h2").innerHTML = "promenjeno";


document.querySelectorAll(".pasus")[2].innerHTML = "menjamo ovo";

 var imeAtributa = document.querySelector("#primer").attributes[0].name;
console.log(imeAtributa);



// var brojAtributa = document.querySelector("#primer").attributes.length;
// for(var i = 0; i <brojAtributa; i++){
//     document.write("Ime atributa:" + document.querySelector("#primer").attributes[i].name);
//     document.write("Vrednost atributa" +document.querySelector("#primer").attributes[i].value + "<br/>");

// }


 var uzimaVrednost = document.querySelector("#primer").hasAttribute("width");
console.log(uzimaVrednost);
var atribut = document.querySelector("#primer");
var boja = atribut.setAttribute("style", "color:blue");


var atribut1 = document.querySelector("#primer").id;
console.log(atribut1);




var noviElement = document.createElement("button");
var sadrzajElementa = document.createTextNode("Klikni");
noviElement.appendChild(sadrzajElementa);
var deoStrane = document.querySelector("#primer");
deoStrane.appendChild(noviElement);

//function hello(){
   // alert('pozz');
//}




var sekunde = 0;
var tajmer;

function brojac(){
    document.querySelector('#prvi').value = sekunde;
    sekunde = sekunde + 1;
    tajmer = setTimeout('brojac()', 5);
}


function zaustavi(){
    clearTimeout(tajmer);
}


document.querySelector('#drugi').addEventListener('click',brojac);
document.querySelector('#treci').addEventListener('click',zaustavi);


var cetvrti = document.querySelector('#cetvrti');
var tajmer1;
function staviTajmer(){
    var sadrzaj = document.querySelector('#cetvrti').value.length;
    if(sadrzaj < 5){
        tajmer1 = setTimeout('alerte()',3000);
    }


}

function alerte(){
    alert('unesite vise');
}

cetvrti.addEventListener('change', staviTajmer);


function provera(){
    var lista = document.querySelector("#list");
    var selektovaniIndex = lista.selectedIndex;
    if(selektovaniIndex !=0){
        var x = lista.options[lista.selectedIndex].text; 
        var y = lista.options[lista.selectedIndex].value;
    }
    console.log(x);
    console.log(y);
    console.log(selektovaniIndex);
}





var x = '30' - 7;
console.log(x);



var car = {
    manyCars : {a : 'Mercedes', b : 'Rover'},
    7 : 'BMW'
}

console.log(car.manyCars);
console.log(car[7]);







// document.querySelector('#proba1').addEventListener('click',proveraEmail);

// var form = document.querySelector('form');
//  form.addEventListener('submit', function(e) {
//      e.preventDefault();
//      proveraEmail(this.phone.value);
//      proveraPassword(this.password.value);
//    });
// function proveraEmail(email){
//     var regEmail = /^[a-zA-Z][a-zA-Z0-9_\.]+(?=[a-zA-Z0-9\.\_]*)@([a-z]{2,}\.)[a-z]{2,}$/;
    
//     if (regEmail.test(email)) {

//         document.querySelector('.greska1').innerHTML='dobro je';
//     }
//     else{
    
//         document.querySelector('.greska1').innerHTML= "nije dobro";
//     }
    
// }





// function proveraPassword(passw){
//     var regPassword = /^[A-Za-z0-9]{5,}$/;
    
//     if (regPassword.match(passw)) {
        
//         document.querySelector('.greska2').innerHTML='dobro je';
//     }
//     else{
    
//         document.querySelector('.greska2').innerHTML="nije dobro";
//     }
    
// }






// var pattern = document.getElementsByTagName('input[pattern]').text;







document.querySelector('#proba1').addEventListener('click',proba);


function proba() {
    document.querySelector('.greska1').innerHTML="greska";
}






















