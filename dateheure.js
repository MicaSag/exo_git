/**************************************************************************************/
/* Script java permettant l'affichage de l'heure et de la date courante de la machine */
/**************************************************************************************/


d = new Date();

document.write(d.toLocaleDateString()+'  '+d.toLocaleTimeString()+'.'); 

