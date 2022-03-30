

let marca,modelo,Semana=0;
    
Mes = window.prompt("Mes?","0");
Dia = window.prompt("Dia?","0");

if ((Mes=="Enero") && (Dia =="Dos"))
 {
     Semana= 1;
 }
 
 if ((Mes=="Agosto") && (Dia =="Diez"))
 {
     Semana= 6;
 }   
 document.write (`<h3> El mes en el que esta es el ${Semana} </h3>`);