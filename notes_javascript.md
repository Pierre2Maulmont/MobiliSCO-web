# Notes sur Javascript

## 1) Généralités


Stéphane : métaphore de la terrasse (client en salle versus serveur en cuisine). Coté client, c'est toujours du JS.
Margot : sans JS, une page web HTML et CSS est statique ; dès que l'utilisateur peut interagir avec la page, il y a du code JS.
2ème intérêt de JS : pas de requete sur le serveur pour tout recharger ; le code JS est sur la page (ex: bouton à cliquer pour augmenter la police, switcher en anglais)

### Pour approcher le code d'une page web : console dans le navigateur firefox

ctrl+maj+k
clic droit, examiner élément : donne accès à l'élément dans Inspecteur
Inversement : survol d'une ligne dans Inspecteur met en surbrillance l'élément dans la page web

### Pour documenter JS
https://developer.mozilla.org/fr/
MDN = Mozilla developer network

### Pour collaborer sur Visual studio code (VSC): Visual Studio Live Share
Dans VSC, l'icone Extensions (ou CTRL MAJ X)

### Autres 
Installer Node sur console pour écrire sur le serveur ???
REPL: du code en ligne ???

### Objet, méthode, propriété, fonction

Objet.méthode = une action à exécuter (ex: voiture.accélérer)
Objet.propriété = une valeur à renvoyer (ex: voiture.couleur)

- __Objet Document__ sur MDN :

L'interface Document représente n'importe quelle page Web chargée dans le navigateur et sert de point d'entrée dans le contenu de la page Web, qui est l'arborescence DOM. L'arborescence DOM inclut des éléments tels que <body> (corps) et <table> (tableau), parmi beaucoup d'autres. Il fournit des fonctionnalités globales au document, comme le moyen d'obtenir l'URL de la page et de créer de nouveaux éléments dans le document.

- __Méthode querySelector ()__ de l'objet Document retourne le premier Element dans le document correspondant au sélecteur 
Ex: le premier élément dans le document qui contient la classe "maclasse" est retourné :
var el = document.querySelector(".maclasse");

Dans Console, je peux trouver un élément et le survoler dans la page, avec :
MonHeader = document.querySelector('header')

- __Fonction__ : méthode non attachée à un objet

## 2) Jouer avec la console web de Firefox

### Créer un tableau et une boucle.map

countries = ['france', 'italie', 'kurdistan']
countries.map(country => 'Pierre est allé en ' + country.toUpperCase())
Le résultat : Array(3) [ "Pierre est allé en FRANCE", "Pierre est allé en ITALIE", "Pierre est allé en KURDISTAN" ]

['france', 'italie', 'kurdistan'].map(country => country.toUpperCase())

- __Array.prototype.map()__ sur MDN :
La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


### Créer des fonctions
CalculTTC = (HT) => HT * 1.2
calculTTC(100) 	      résultat : 	120

HT = 500
calculTTC(HT)		résultat :		600	

Attention = (msg) => alert('Attention : ' + msg)

## 3) L'ardoise JavaScript de Firefox + la console

Firefox, Ouvrir le menu, development web, ardoise JavaScript
Ecrire du code, puis Menu/Exécuter : voir le résultat sur la console (CTRL MAJ K)

- __méthode console.log__ sur MDN : Affiche un message dans la Console Web
console.log('coucou')
console.log('calcul de tva :', 100*1.2)

countries = ['France', 'Espagne', 'Italie']
countries.map(country => console.log('Pays', country))

- __Objet : {}__
france = {'capitale': 'Paris', 'population': 66}
espagne = {'capitale': 'Madrid', 'population': 46}
console.log('population fr:', france.population)
console.log('population es:', espagne.population)

- __tableau et {}__
countries = [{'nom': 'France', 'population': 66}, {'nom': 'Espagne', 'population': 46}]
countries.map(country => console.log('Pays :' + country.nom))

- __back quotes ``__ (AltGr 7) et __${}__

countries = [
 {'nom': 'France', 'population': 67},
 {'nom': 'Italie', 'population': 60},
 {'nom': 'Espagne', 'population': 46}
]

countries.map(country => console.log(`Pays : ${country.nom} - Population : ${country.population}`))

- __Avec une fonction qui exécute console.log et .map :__
write = (msg) => console.log(msg)
displayCountriesWithPopulation = (countries) => countries.map(country => write(`Pays : ${country.nom} - Population : ${country.population}`))

/*
* My program 
*/

europe = [
 {'nom': 'France', 'population': 67},
 {'nom': 'Italie', 'population': 60},
 {'nom': 'Espagne', 'population': 46}
]

displayCountriesWithPopulation(europe)

- __Exercice avec données des Etablissements publics locaux d'enseignement__ :

write = (msg) => console.log(msg)
displayEpleComplet = (EPLE) => EPLE.map(etab => write(`Nom_EPLE : ${etab.nom} - Numéro_UAI : ${etab.UAI} - Latitude : ${etab.latitude} - Longitude : ${etab.longitude}`))

EPLE = [  
 {'nom': 'ARAGO', 'UAI': '0750680G', 'latitude': '48.847936', 'longitude' : '2.394438'},    
 {'nom': 'La GARRIGUETTE', 'UAI': '0300050S', 'latitude': '43.7477966', 'longitude' : '4.2245153'},
 {'nom': 'Boris VIAN', 'UAI': '0140070A', 'latitude': '49.0759528', 'longitude' : '-0.0794074'}
 ]
displayEpleComplet(EPLE)

--------------------------------
EPLEbis = [
 {'nom': 'Germaine TILLION', 'UAI': '0753936W', 'latitude': '48.8428924', 'longitude' : '2.4115478'},    
 {'nom': 'André MALRAUX', 'UAI': '0752387M', 'latitude': '48.879049', 'longitude' : '2.290916'},

 ]
displayEpleComplet(EPLEbis)

## 3) Avec un fichier.html
