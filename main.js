let personaje1 = {nombre:"Marco", maxHP:200, actualHP:200,damage:25, isDead:false};
let personaje2 = {nombre:"Belfor", maxHP:250, actualHP:250,damage:15, isDead:false};

let jugadores = {personaje1,personaje2}

function mostrarJugadores(lista){
	for (var i = jugadores.length - 1; i >= 0; i--) {
		console.log("nombre: "+jugadores[i].nombre +" vida: " +jugadores[i].actualHP+ " daño: " + jugadores[i].damage)
	}
}

function ataque( personaje1, personaje2){
	if(personaje1.actualHP<=0){
			console.log(personaje1.nombre + " está fuera de combate");
			personaje1.isDead = true;
			
		}else{
			console.log(personaje1.nombre+ " ataca!");
	personaje2.actualHP = (personaje2.actualHP - personaje1.damage);
	console.log(personaje2.nombre+" tiene ahora "+personaje2.actualHP+ " puntos de vida")
}
		}
	

function combat (personaje, personaje2){
	console.log("EMPIEZA EL COMBATE! EN LA BATALLA DE HOY PELEARÁ: " 
		+personaje1.nombre + " V/S " +personaje2.nombre);
	mostrarJugadores(jugadores);
	while( personaje1.actualHP>0 && personaje2.actualHP>0){
		if(personaje1.isDead===true || personaje1.isDead===true){break};
		ataque(personaje1,personaje2);
		if(personaje1.isDead===true || personaje1.isDead===true){break};

		ataque(personaje2,personaje1);
		if(personaje1.isDead===true || personaje1.isDead===true){break};

	}
}


combat(personaje1,personaje2);
