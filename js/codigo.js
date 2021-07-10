// Aquí vendría TODO el javaScript (sólo javaScript)

/*2. Utilitzant l'operador d'assignació crea les següents variables i constants amb els valors que corresponguin:*/

/*Crea una variable booleana (anomenada 'viu') amb el valor corresponent a si estàs viu o no.*/

var viu = true;

/*Crea una variable booleana (anomenada 'sexeFemeni') amb el valor segons sigui el teu sexe.*/

var sexeFemeni = false;

/*Crea una variable numèrica (anomenada 'entrada') amb el valor numèric de deu.*/

var entrada = 10;

/*Crea una constant (anomenada 'ORELLES') amb un valor numèric (el valor corresponent).*/

const ORELLES = 2;

/*Crea una variable numèrica (anomenada 'naixement') amb el valor de l'any en què vas néixer.*/

var naixement = 1979;

/*Crea una variable numèrica (anomenada 'actualment') amb el valor numèric de '2021'.*/

var actualment = 2021;

/*Crea una variable numèrica (anomenada 'edat') amb el valor assignat utilitzant l'operador aritmètic necessari a partir dels dos valors anteriors.*/

var edat = actualment - naixement;
console.log("Resultat exercici 2: " + edat);

/*Crea una variable numèrica (anomenada 'exercici') amb el valor de 0.*/

var exercici = 0;


//3. Incrementa en 5 el valor de la variable 'exercici' utilitzant l'operador adequat.

exercici += 5;
console.log("Resultat exercici 3: " + exercici);


//4. Sense utilitzar cap parèntesis i en una mateixa línia, incrementa el valor de la variable 'naixement' en 1 i multiplica el seu valor per 2. Guarda el resultat a la nova variable 'resultatAbans', de manera que l'increment es realitzi abans de tornar el valor.
//Ajuda: Així, si per exemple naixement = 1971, resultatAbans tindria un valor de 3944.

var resultatAbans = ++naixement * 2;
console.log("Resultat exercici 4: Naixement = " + naixement + " resultatAbans = " + resultatAbans);


//5. Incrementa en 1 el valor de la variable 'resultatAbans' i multiplica-la pel valor de 'exercici'. Guarda el resultat a la nova variable 'resultatDespres', de manera que l'increment es realitzi després de tornar el valor de la multiplicació.
//Ajuda: Amb les mateixes dades del punt anterior, resultatDespres tindria un valor de 19720 i resultatAbans = 3945.

var resultatDespres = resultatAbans++ * exercici;
console.log("Resultat exercici 5: resultatDespres tindria un valor de " + resultatDespres + " i resultatAbans = " + resultatAbans);


//6. Utilitzant l'operador ternari i el valor booleà de 'sexeFemeni', si és compleix la condició, guarda a la variable 'genere' el valor string 'dona', en cas contrari el valor serà 'home'.

var genere = (sexeFemeni) ? "dona" : "home";
console.log("Resultat exercici 6: " + genere);


//7. Guardar a la variable 'mateixNumero’ el resultat booleà de comparar si el valor de la constant 'ORELLES ' és diferent (tant en valor com en tipus de valor) a '2' (valor de tipus string). (En qualsevol cas el resultat serà sempre true).

var mateixNumero = (ORELLES !== "2");
console.log("Resultat exercici 7: " + mateixNumero);

//8. Guardar a la variable 'majorEdat' el valor true, quan el valor de la variable 'edat' sigui més gran o igual a 18 i a més el valor de la variable 'viu' sigui true, en cas contrari el valor serà false.

var majorEdat = (edat >= 18 && viu == true) ? true : false;
console.log("Resultat exercici 8: " + majorEdat);


//9. Utilitzant l'operador ternari i els operadors lògics necessaris, realitza la següent assignació:
//Si el valor de la variable 'majorEdat' no és true, o bé si el valor de la variable 'actualment' és menor que la teva data de 'naixement', el valor de la nova variable 'vidaAdulta' serà igual a 0, en el cas que es compleixi almenys una de les 2 condicions 'vidaAdulta' serà igual al nombre d'anys que porta com a major d'edat (aquest valor s'ha de calcular amb l'operador aritmètic corresponent).

var vidaAdulta = (majorEdat == false || actualment < naixement) ? 0 : actualment - (naixement + 18);

//AQUI HAGO UNA CHAPUCILLA PARA COMPENSAR LOS AÑOS DE VIDA ADULTA, YA QUE COMO EN EL PUNTO 4 SE INCREMENTA UN AÑO DE NACIMIENTO EL RESULTADO NO ES CORRECTO

vidaAdulta += 1;
console.log("Resultat exercici 9: " + vidaAdulta);


// 10. (Resoldre millor sense utilitzar l'operador ternari ni el condicional if que és d’un PLA posterior). Crea una variable anomenada 'comprovació' que tingui com a valor true si 'viu' és false i si la data de 'naixement' és menor a 1900, però únicament serà true quan es compleixin les 2 condicions.

var comprovacio = (viu == false && naixement < 1900);
console.log("Resultat exercici 10: " + comprovacio);


// 11. Utilitzant l'operador lògic necessari, inverteix el valor de la variable 'comprovació', de manera que si és true sigui false, o si és false sigui true (sense utilitzar l'operador ternari ni el condicional if que es tractarà al PLA4)

//NO ESPECIFICA EL ENUNCIADO SI SE HA DE GUARDAR EN UNA VARIABLE, ASI QUE TAN SOLO LO MOSTRARE

console.log("Resultat exercici 11: " + !comprovacio);


// 12. Utilitzant l'operador necessari, guarda en la nova variable 'descompte' el valor integer 10 si l'usuaria és  dona (consultant la variable 'sexeFemeni') o 0 si és home.

var descompte = (sexeFemeni) ? 10 : 0;
console.log("Resultat exercici 12: " + descompte);


/*13. Utilitzant l'operador necessari, guarda a la variable 'missatge1' el text següent:
Com que és [UNA DONA o UN HOME] el preu d'entrada serà de [el valor de la variable 'entrada'] € - [el valor de la variable 'descompte'] €, 
és a dir [resultat de restar les dues variables aritmèticament] €.
El valor DONA / HOME (escrit en minúscula) prové de la variable 'genere', mentre que 'UNA' o 'UN' ha de provenir d'una nova variable anomenada 'determinant' 
que hauràs de crear i assignar-li el valor d’'UNA' o 'UN' depenent del valor de 'sexeFemeni'.*/
/*A continuació mostra la frase resultant per pantalla (com per exemple):
Com que és una dona, el preu d'entrada és de 10€ - 10€, és a dir 0€  (si és dona)
	o bé (si és home)
Com que és un home, el preu d'entrada és de 10€ - 0€, és a dir 10 €
*/

var determinant = (sexeFemeni) ? "una" : "un";
var missatge1 = "Com que és " + determinant + " " + genere + " el preu d'entrada serà de " + entrada + "€ - " + descompte + "€, és a dir " + (entrada - descompte) + "€";
console.log("Resultat exercici 13: " + missatge1);
//alert(missatge1);


/*14. Per comprovar que l'exercici és correcte. Crea una variable anomenada 'missatgeFinal'. El seu valor serà la concatenació dels següents valors creats als punts anteriors. Finalment, mostra el seu valor en pantalla:
[ENTER (o salt de línia)]
comprovació: [valor de la variable 'comprovació'].
[ENTER (o salt de línia)]
Vaig néixer en [valor de la variable 'naixement'-1](*2), per tant tinc [valor de 'edat'], i així porto [valor de la variable 'vidaAdulta'] anys d'adultesa.
[ENTER (o salt de línia)]
suma prèvia és [valor de la variable 'resultatAbans'] i la posterior és [valor de 'resultatDespres'].
[ENTER (o salt de línia)]
El valor de la variable 'mateixNumero' és [valor de 'mateixNumero'].

*2. Al valor 'naixement' se li ha de decrementar el seu valor en 1  (en la mateixa línia), ja que al punt 4 es va incrementar el seu valor en 1.
*/

var missatgeFinal = "\nComprovació: " + comprovacio + "\nVaig néixer en " + (naixement - 1) + ", per tant tinc " + edat + ", i així porto " + vidaAdulta + " anys d'adultesa.\n"
	+ "Suma prèvia és " + resultatAbans + " i la posterior és " + resultatDespres + ".\nEl valor de la variable 'mateixNumero' és " + mateixNumero + ".";

console.log("Resultat exercici 14:\n " + missatgeFinal);
//alert(missatgeFinal);


