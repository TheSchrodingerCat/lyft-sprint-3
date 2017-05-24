
//----------- validación del teléfono -----------------




document.getElementById("become-driver").addEventListener("click",function(){
	var number = document.getElementById("cell-number").value;
	document.getElementById("cell-number").value = "";

	if (!(/^[0-9]{8}$/).test(number)){
		alert("Número inválido.");
	} else {
		alert("Número ingresado con éxito.");
	}

});


//------- para cambiar del input al tablero ------------------

var start = document.getElementById("start-play");

var coordenadas = document.getElementById("init-play");
var area = document.getElementById("table-car");

start.addEventListener("click",function(){
	coordenadas.classList.toggle("nothing");
	area.classList.toggle("nothing");
});


//coordenadas iniciales del auto
var coordX = document.getElementById("posicion-x").value;
var coordY = document.getElementById("posicion-y").value;

//constructor

//---------- auto -------------------------------

function Auto(posicion_x,posicion_y){
	this.posicion_x = posicion_x;
	this.posicion_y = posicion_y;
	this.avanzar = function(){
		this.posicion_y += 1;
		console.log(this.posicion_y);
	};
	this.retroceder = function(){
		this.posicion_y -= 1;
		console.log(this.posicion_y);
	};
	this.ir_derecha = function(){
		this.posicion_x += 1;
		console.log(this.posicion_x);
	};
	this.ir_izquierda = function(){
		this.posicion_x -= 1;
		console.log(this.posicion_x);
	}
}



//luego la posicion del auto es

//var posAuto = tablero[0][0];

/*var numeros = [1,2,3,4,5,6,7,8,9,10];

var x, y;
for (i=0 ; i<10 ; i++){
	if (numeros[i].toString() === coordX){
		x = numeros[i];
	}
	if (numeros[i].toString() === coordY){
		y = numeros[i];
	}
}*/



//creamos nuestro auto

var honda = new Auto(coordX,coordY);

//ahora enlazamos con los eventos
//rescatamos el código de las teclas con un constructor literal

var tecla = {
	LEFT: 37,
	UP: 38,
	RIGHT:39,
	DOWN: 40
}

//funcion de eventos
function way(event){
   var evento = event.keyCode;
   if (evento==tecla.UP/* && coordY<6*/){
      honda.avanzar();
   } else if (evento==tecla.LEFT/* && coordX>0*/){
      honda.ir_izquierda();
   } else if (evento==tecla.RIGHT/* && coordX<10*/){
      honda.ir_derecha();
   } else if (evento==tecla.DOWN/* && coordY>0*/){
      honda.retroceder();
   }
}

//todo esto se ejecutará cuando se presionen las teclas UP, DOWN, LEFT Y RIGHT

document.addEventListener("keydown",way);



//----------- tablero ----------------------

var tablero = [];
for (i=0 ; i<6 ; i++){
	tablero.push([0,0,0,0,0,0,0,0,0,0]);
}

var table = document.getElementById("table-car");

var largeX = tablero.length;
var largeY = tablero[0].length;

var ancho, alto;
for (i=0 ; i<largeX ; i++){
	ancho = document.createElement("div");
	ancho.setAttribute("class","anchoCasilla");
	for (j=0 ; j<largeY ; j++){
		alto = document.createElement("div");

		//se muestra en el HTML
		alto.innerHTML = tablero[i][j];
		alto.setAttribute("class","altoCasilla");
		alto.setAttribute("id","pos-" + i + "-" + j);

		//cada ancho almacena largeY divs de alto, por tanto:
		ancho.appendChild(alto);
	}
	//ahora la div padre adopta el tablero
	table.appendChild(ancho);
}

