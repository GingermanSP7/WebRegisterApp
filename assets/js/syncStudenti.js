/**
 * Sync data html with graphs
 */
 let promossi = myChartStudenti.data.datasets[0].data[0];
 let rimandati = myChartStudenti.data.datasets[0].data[1];
 
 let numStudentiPromossi = $("#numPromossi");
 numStudentiPromossi.text(promossi);
 
 let numStudentiRimandati = $("#numRimandati");
 numStudentiRimandati.text(rimandati);
 
 /**
  * Added counter animation for Tesisti's card
  */
 
 $(document).ready(function(){
     $("#counter").counterUp({
         delay: 10,
         time: 1000
     })
 });