<?php
/* 2. Utilitzant l'operador d'assignació, crea les següents variables i constants amb els valors que corresponguin:
Crea una variable booleana (anomenada 'viu') amb el valor corresponent a si estàs viu o no.
Crea una variable booleana (anomenada 'sexe_femeni') amb el valor segons sigui el teu sexe.
Crea una variable integer (anomenada 'entrada') amb el valor integer de deu.
Crea una constant (anomenada 'ORELLES') amb un valor integer (el valor corresponent).
Crea una variable integer (anomenada 'naixement') amb el valor de l'any en què vas néixer.
Crea una variable integer (anomenada 'actualment') amb el valor integer de '2019'.
Crea una variable integer (anomenada 'edat') amb el valor assignat utilitzant l'operador aritmètic necessari a partir dels valors anteriors.
Crea una variable integer (anomenada 'exercici') amb el valor de 0.
*/




// 3. Utilitzant l'operador necessari, crea una variable (anomenada 'vaig_neixer'), amb el mateix valor que la variable 'naixement' i creada de tal manera que quan es modifiqui el valor de la variable 'naixement', també es modifiqui el valor automàticament d’ambdues variables.




// 4. Incrementa en 5 el valor de la variable 'exercici' utilitzant l'operador adequat.




// 5. Sense utilitzar parèntesis i en la mateixa línea, incrementa el valor de la variable 'naixement' en 1 i multiplica el seu valor per 2. Guarda el resultat a la nova variable 'resultat_abans', de manera que l'increment es realitzi abans de tornar el valor.




// 6. Incrementa en 1 el valor de la variable 'resultat_abans' i multiplica-la pel valor de la variable 'exercici'. Guarda el resultat a la variable 'resultat_despres', de manera que l'increment es realitzi després de tornar el valor de la multiplicació.




// 7. Utilitzant l'operador ternari i el valor booleà de 'sexe_femeni', si és compleix la condició, guarda en la variable 'genere' el valor string 'dona', en cas contrari el valor serà 'home'.
//En aquest punt, en comparar el valor booleà de 'sexe_femeni' amb el valor integer 1 (o 0), un valor booleà true haurà de ser equivalent a 1, mentre que false serà igual o equivalent a 0.




// 8. Guardar a la variable 'mateix_numero’ el resultat booleà de comparar si el valor de la constant 'ORELLES ' és diferent (tant en valor com en tipus de valor) a '2' (valor de tipus string). (En qualsevol cas el resultat serà sempre true).




// 9. Guardar a la variable 'major_edat' el valor true, quan el valor de la variable 'edat' sigui més gran o igual a 18 i a més el valor de la variable 'viu' sigui true, en cas contrari el valor serà false.




// 10. Utilitzant l'operador ternari i els operadors lògics necessaris, realitza la següent assignació:
// Si el valor de la variable 'major_edat' no és true, o bé si el valor de la variable 'actualment' és menor que la teva data de 'naixement', el valor de la nova variable 'vida_adulta' serà igual a 0, en el cas que es compleixi almenys una de les 2 condicions 'vida_adulta' serà igual al nombre d'anys que porta com a major d'edat (aquest valor s'ha de calcular amb l'operador aritmètic corresponent).




// 11. Crea una variable anomenada 'comprovació' que tingui com a valor true si 'viu' és false o si la data de 'naixement' és menor a 1900, però únicament serà true quan només es compleixi una de les 2 condicions (si es compleixen les dues o cap, el resultat ha de ser false).




// 12. Utilitzant l'operador lògic necessari i en una única línia de codi, inverteix el valor de la variable 'comprovació', de manera que si és true sigui false, o si és false sigui true.




//13. Utilitzant únicament l'operador anomenat de la nau espacial i posteriorment un operador aritmètic, guarda a la nova variable 'descompte' el valor integer 10 si l'usuaria és  dona (consultant la variable 'sexe_femeni') o 0 si és home.




/* 14. Utilitzant l'operador de concatenació, guarda a la variable 'missatge1' el text següent:
Com que és [UNA DONA o UN HOME] el preu d'entrada serà de [el valor de la variable 'entrada'] € - [el valor de la variable 'descompte'] €, és a dir [resultat de restar les dues variables aritmèticament] €

El valor DONA / HOME (escrit en minúscula) prové de la variable 'genere', mentre que 'UNA' o 'UN' ha de provenir d'una nova variable anomenada 'determinant' que hauràs de crear i assignar-li el valor d’'UNA' o 'UN' depenent del valor de 'sexe_femeni'
*/




// 15. Sense crear ni existir la variable 'IVA', guarda en una nova variable anomenada 'extra' el valor 0 si la variable 'IVA' no existeix (com és el cas), utilitzant l'operador de fusió de null.




/*16. Utilitzant l'operador necessari, evita que quan es faci referència a continuació a la variable (que no existeix) 'IVA' es mostri cap avís de PHP.
Concatena el valor de la variable 'missatge1' al final de la frase
...(IVA [el valor de la variable 'IVA'] €)

A continuació, mostra la frase resultant per pantalla (com per exemple):
Com que és una dona el preu d'entrada és de 10 € -10 €, és a dir 0 € (IVA €)
	o bé si és home
Com que és un home el preu d'entrada és de 10 € - 0 €, és a dir 10 € (IVA €)
(Com no existeix la variable 'IVA' aquest valor quedarà buit)
*/




// 17. Crea una variable anomenada 'anys_naixament', assignant-li el valor de la variable 'edat', però de tal manera que quan es modifiqui el valor de qualsevol d'aquestes dues variables no es modifiquin els dos valors.




// 18. Modifica el valor de la variable 'anys_naixament', afegint-li el text ' anys' (amb un espai previ) i convertint el seu valor en string (text).




/* 19. Per comprovar que l'exercici és correcte. Crea una variable anomenada 'missatge_final' i que com a valor tingui la concatenació dels següents valors creats als punts anteriors. Finalment, mostra el seu valor per pantalla:
[ENTER]
$comprovació: (*1) [valor de la variable 'comprovació'].
[ENTER]
Vaig néixer en [valor de la variable 'vaig_neixer'-1](*2), per tant tinc [valor de 'anys_naixament'], i així porto [valor de la variable 'vida_adulta'] anys d'adultesa.
[ENTER]
suma prèvia és [valor de la variable 'resultat_abans'] i la posterior és [valor de 'resultat_despres'].
[ENTER]

El valor de la variable '$mateix_numero' és [valor de 'mateix_numero'].
*1. El signe de '$' seguit del nom de la variable ha de mostrar-se.
*2. Al valor 'vaig_neixer' se li ha de restar 1 (en la mateixa línia), ja que al punt 5 es va incrementar el seu valor en 1.
*/





?>