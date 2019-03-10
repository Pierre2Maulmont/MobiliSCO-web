# Notes sur Visual studio code

- ADD et COMMIT : icone de Source control - le graph avec branches (invitation à commiter). Message du commit CRLT ENTER pour commiter
icone en bas avec flèches montante/descendante (invitation à pusher)

- les + et -, sur un fichier en modification :
clic sur + pour mettre en attente les modif, déplacement dans la "zone de transit" et de commiter seulement sur un seul fichier.
VSC signale qu'un fichier n'est pas enregistré, en zone de transit, et de faire le commit quand même => la pile en transit est vidée

- Processus de saisie
1) je saisis une modif sur .md : Dans Explorateur, 1 fichier à enregister

2) CTRL S, j'enregistre : dans Controle du code source, 1 fichier en attente
mention (Working tree) dans l'onglet du fichier md.
Pour ne pas avoir les modifications avant/après sur 2 fichiers : clic droit nom_du_fichier, ouvrir un fichier. Sinon, "ouvrir les modifications"
U : fichier nouveau, non suivi par git ?

3) Clic sur le signe + : le md est déplacé vers MODIFICATIONS EN TRANSIT
mention (Index) dans l'onglet du fichier md
A : index ajouté

4) Message rédigé et CTRL ENTER : +1 dans les flèches de synchronisation

- STRUCTURE : ouvre le plan du .md dans une fenêtre

- __Collaborer au projet d'autrui et faire une pull request__
1) fork du repo Open carte comptable de Margotdem
2) à partir du repo forké de mon github, copie de l'URL du repo et Affichage, Palette de commandes, saisir cloner
message de fin de clonage: voulez-vous ouvrir le dépôt cloné ou l'ajouter à votre espace de travail ???
3) Sur console git, créer une branche, en local : git checkout -b Ma_branche sur console
Sur VSC : Affichage, Palettte, branche
- Modifier le Readme sur VSC
[lien hyper texte](URL)
4) git push origin modifier_le_readme
    Echec initial du push : j'avais oublié de fork
    $ 
    remote: Permission to MargotDem/opencartecomptable.git denied to Pierre2Maulmont.
    fatal: unable to access 'https://github.com/MargotDem/opencartecomptable.git/': The requested URL returned error: 403
5) pull request sur mon github
6) Merge sur github de l'auteure
