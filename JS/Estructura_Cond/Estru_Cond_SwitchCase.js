
var d = new Date();
          switch (time = d.getHours())
           {
                 case 0:
                 case 1:
                 case 2:
                 case 3:
                 case 4:
                 case 5:
                 case 6:
                 case 7:
                 case 8:
                 case 9:
                 case 10:
                 case 11:
                     document.write("Buenos dias");
                     break;
                 case 13:
                 case 14:
                 case 15:
                 case 16:
                 case 17:
                     document.write("Buenas Tardes");
                     break;
                 case 18:
                 case 19:
                 case 20:
                 case 21:
                 case 22:
                 case 23:
                     document.write("Buenas Noches");
                     break;
                 default:
                     document.write("Es de dia");
             }
             