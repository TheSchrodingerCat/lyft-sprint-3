
//tablero

var tablero = [];
for (i=0 ; i<6 ; i++){
	tablero.push([0,0,0,0,0,0,0,0,0,0]);
}

//coordenadas iniciales del auto

var coordX = document.getElementById("posicion-x").value;
var coordY = document.getElementById("posicion-y").value;

var table = document.getElementById("table-car");

var largeX = tablero.length;
var largeY = tablero[0].length;

var ancho, alto;
for (i=0 ; i<largeX ; i++){
	ancho = document.createElement("div");
	ancho.setAttribute("class","anchoCasilla");
	for (j=0 ; j<largeY ; j++){
		alto = document.createElement("div");
		alto.setAttribute("class","altoCasilla");

		//se muestra en el HTML
		alto.innerHTML = tablero[i][j];

		//cada ancho almacena largeY divs de alto, por tanto:
		ancho.appendChild(alto);
	}
	//ahora la div padre adopta el tablero
	table.appendChild(alto);
}








//auto