/* Ara que ja sabem com simular el llançament d'una moneda tant equilibrada com desequilibrada, passeu a simular el llançament d'un dau.Feu un script que demani a
l'usuari quants llançaments vol realitzar. El programa haurà de repetir el llançament d'un dau equilibrat  tantes vegades com l'usuari li indiqui. El programa
acumularà el nombre de vegades que ha sortit cada cara del dau (tot i que encara no ho hem vist, si voleu podeu fer servir arrays, però no consideraré malament,
de moment, que ho feu amb variables). Una vegada ho tingueu, feu una còpia de seguretat del codi fet i modifiqueu-lo per tal que el dau estigui desequilibrat.
En aquest cas, podeu decidir vosaltres quina cara del dau és la que està desequilibrada.*/

var llançaments = 100;
var cara1 = 0;
var cara2 = 0;
var cara3 = 0;
var cara4 = 0;
var cara5 = 0;
var cara6 = 0;

for (var i = 0; i < llançaments; i++) {
  var numDauAleatori = Math.random();
  if (numDauAleatori < 0.15) {
    cara1++;
  } else if (numDauAleatori < 0.3) {
    cara2++;
  } else if (numDauAleatori < 0.6) {
    cara3++;
  } else if (numDauAleatori < 0.9) {
    cara4++;
  } else if (numDauAleatori < 0.95) {
    cara5++;
  } else if (numDauAleatori < 1) {
    cara6++;
  }
}
