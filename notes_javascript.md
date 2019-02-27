# Notes sur Javascript

## Généralités


Stéphane : métaphore de la terrasse (client en salle versus serveur en cuisine). Coté client, c'est toujours du JS.
Margot : sans JS, une page web HTML et CSS est statique ; dès que l'utilisateur peut interagir avec la page, il y a du code JS.
2ème intérêt de JS : pas de requete sur le serveur pour tout recharger ; le code JS est sur la page (ex: bouton à cliquer pour augmenter la police, switcher en anglais)

console dans le navigateur firefox : ctrl+maj+k
clic droit, examiner élément : donne accès à l'élément dans Inspecteur
Inversement : survol d'une ligne dans Inspecteur met en surbrillance l'élément dans la page web



https://developer.mozilla.org/fr/
MDN = Mozilla developer network



Installer Node sur console pour écrire sur le serveur ???
REPL: du code en ligne ???

#### Objet, méthode, propriété

Objet.méthode = une action à exécuter (ex: voiture.accélérer)
Objet.propriété = une valeur à renvoyer (ex: voiture.couleur)


- __Objet Document :__

L'interface Document représente n'importe quelle page Web chargée dans le navigateur et sert de point d'entrée dans le contenu de la page Web, qui est l'arborescence DOM. L'arborescence DOM inclut des éléments tels que <body> (corps) et <table> (tableau), parmi beaucoup d'autres. Il fournit des fonctionnalités globales au document, comme le moyen d'obtenir l'URL de la page et de créer de nouveaux éléments dans le document.

- __Méthode querySelector ()__ de l'objet Document retourne le premier Element dans le document correspondant au sélecteur 
Ex: le premier élément dans le document qui contient la classe "maclasse" est retourné :
var el = document.querySelector(".maclasse");

Dans Console, je peux trouver un élément et le survoler dans la page, avec :
MonHeader = document.querySelector('header')


### Tableau et boucle.map

countries = ['france', 'italie', 'kurdistan']
countries.map(country => 'Pierre est allé en ' + country.toUpperCase())
Array(3) [ "Pierre est allé en FRANCE", "Pierre est allé en ITALIE", "Pierre est allé en KURDISTAN" ]

['france', 'italie', 'kurdistan'].map(country => country.toUpperCase())

### Créer une fonction dans la console web de firefox
CalculTTC = (HT) => HT * 1.2

résultat :
calculTTC(100) 				120

HT = 500
calculTTC(HT)				600	





redAlert = () => alert('RED-ALERT')

redAlert = (msg) => alert('RED-ALERT:' + msg)