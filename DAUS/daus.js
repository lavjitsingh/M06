/* Ara que ja sabem com simular el llançament d'una moneda tant equilibrada com desequilibrada, passeu a simular el llançament d'un dau.Feu un script que demani a
l'usuari quants llançaments vol realitzar. El programa haurà de repetir el llançament d'un dau equilibrat  tantes vegades com l'usuari li indiqui. El programa
acumularà el nombre de vegades que ha sortit cada cara del dau (tot i que encara no ho hem vist, si voleu podeu fer servir arrays, però no consideraré malament,
de moment, que ho feu amb variables). Una vegada ho tingueu, feu una còpia de seguretat del codi fet i modifiqueu-lo per tal que el dau estigui desequilibrat.
En aquest cas, podeu decidir vosaltres quina cara del dau és la que està desequilibrada.*/

var numPlay = prompt("Quantes partides vols fer: ");
     // 1  2  3  4  5 6
var fr=[15,15,30,30,5,5];
var minPointoWin = 5;
var probtowin = 0;
var sumafr = 0;


// suma dels elements del arrays
for (var i = 0; i < fr.length; i++){
  sumafr += fr[i];
}
for (var i = 0; i < minPointoWin -1; i++){
  probtowin = fr[i] / sumafr;
  document.write("<br>");
  document.write(probtowin);
}
