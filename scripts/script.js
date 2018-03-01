
var myFotos = new Array();
myFotos[0] = "img/painelpizzas/painelpizzas1.png";
myFotos[1] = "img/painelpizzas/painelpizzas2.png";
myFotos[2] = "img/painelpizzas/painelpizzas3.png";
myFotos[3] = "img/painelpizzas/painelpizzas4.png";
myFotos[4] = "img/painelpizzas/painelpizzas5.png";

var num = 0;

function albumPizzas() {

    len = myFotos.length;

            

    document.getElementById("painelpizzas").src = myFotos[num++];

    if (num == len) {
        num = 0;
    }

}

var myVar = setInterval(function () { albumPizzas() }, 3000);

