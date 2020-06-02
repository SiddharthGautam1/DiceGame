var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6)+1;
var randomSource1 = "Images/dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute ("src" , randomSource1 );

var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2 * 6)+1;
var randomSource2 = "Images/dice" + randomnumber2 +".png";
document.querySelector(".img2").setAttribute ("src" , randomSource2);

if (randomnumber1>randomnumber2)
   {
       document.querySelector("h1").innerHTML = "Player 1 Wins"; }

      
   else if (randomnumber1<randomnumber2)
   {
       document.querySelector("h1").innerHTML = "Player 2 Wins "; }

       else 
       {
        document.querySelector("h1").innerHTML = "Its a TIE "; }

       

