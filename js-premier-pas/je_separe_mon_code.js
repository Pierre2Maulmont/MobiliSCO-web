document.addEventListener('DOMContentLoaded', event => 
   {
      // ici le DOM est chargé :
   
      EPLE = [  
       {'nom': 'ARAGO', 'UAI': '0750680G', 'latitude': '48.847936', 'longitude' : '2.394438'},    
       {'nom': 'La GARRIGUETTE', 'UAI': '0300050S', 'latitude': '43.7477966', 'longitude' : '4.2245153'},
       {'nom': 'Boris VIAN', 'UAI': '0140070A', 'latitude': '49.0759528', 'longitude' : '-0.0794074'}
      ]
     
      write = (msg) => document.write(`<ul><li><strong><em>${msg}</em></strong> </li></ul><br>`)
     
      displayEPLEwithUAI = (etablissements) => etablissements.map(etablissement => 
      write(`EPLE : ${etablissement.nom} - UAI : ${etablissement.UAI} - UAI : ${etablissement.latitude} - UAI : ${etablissement.longitude}`))
         
      displayEPLEwiethUAI(EPLE)   
   })

   document.addEventListener('DOMContentLoaded', event => 
   {
      // ici le DOM est chargé :
   
      document.querySelector('header').innerText

   })

