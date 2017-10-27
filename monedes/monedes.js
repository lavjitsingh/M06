/* Activitat 4. Mira d'aconseguir que sigui el programa qui decideixi cap a quin costat de la moneda es decantarà, és a dir,
si donarà més pes a la cara que a la creu i que sigui el programa qui decideixi, a més, fins a quin punt dóna més pes a aquest
costat, és a dir, que decideixi el programa l'amplada de l'interval de cara i de creu.*/

var cara = 0;
var creu = 0;
var repeat = 1000;
var desquilibri = Math.random() * 0.5;
var desquilibriCara = Math.random();

for (var i = 0; i < repeat; i++) {
  if (desquilibriCara > 0.5) {
    if ((Math.random()) < desquilibri) {
      creu++;
    } else {
      cara++
    }
  } else {
    if ((Math.random()) < desquilibri) {
      cara++;
    } else {
      creu++
    }
  }

}
document.write("No Equilibrat: Han sortit " + cara + " caras i " + creu + " creus en " + repeat + " repeticions<br>");
