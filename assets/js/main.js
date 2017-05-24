
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

		//cada ancho almacena largeY divs de alto, por tanto:
		ancho.appendChild(alto);
	}
	//ahora la div padre adopta el tablero
	table.appendChild(ancho);
}


//---------- auto -------------------------------

//constructor

function Auto(posicion_x,posicion_y){
	this.posicion_x = posicion_x;
	this.posicion_y = posicion_y;
	this.avanzar = function(){
		posicion_y += 1;
		return posicion_y;
	};
	this.retroceder = function(){
		posicion_y -= 1;
		return posicion_y;
	};
	this.ir_derecha = function(){
		posicion_x += 1;
		return posicion_x;
	};
	this.ir_izquierda = function(){
		posicion_x -= 1;
		return posicion_x;
	}
}

//coordenadas iniciales del auto

var coordX = document.getElementById("posicion-x").value;
var coordY = document.getElementById("posicion-y").value;

//creamos nuestro auto

var honda = new Auto(coordX,coordY);

//ahora enlazamos con los eventos









