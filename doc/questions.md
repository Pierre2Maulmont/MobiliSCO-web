
### J'ai pushé sur console debrief_etablissements.md (avec les commentaires de Robi sur Oeben le 5/2/19), mais je ne le retrouve pas sur Keybase, ni le répertoire A_suivre d'ailleurs  
De ce que je comprénds, -keybase- propose un espace de stockage **et** des espaces -git-  
-A_suivre- est un espace -git- distant que tu peux gérer via des commandes -git- en console ou avec -Visual studio-

### Sans terminal (donc sans add), peut-on différencier les commit ?  
Oui, avec l'éditeur -Visual Studio Code- dans la section -git- tu peux sélectionner les fichiers à -commiter- avec l'icone +

### terminal : comment déplacer les md d'un répertoire à l'autre  
`$ mv *.md <destination>`
\* joue le rôle de joker

### md : syntaxe pour bullet point de rang 2 et +
https://github.com/github/markup/issues/210

### console, message nouveau :
`
$ git add debrief_etablissements.md
warning: LF will be replaced by CRLF in debrief_etablissements.md.
`  
  
The file will have its original line endings in your working directory.
Le retour ligne par défaut dans les fichiers sous windows est différent de celui attendu par des fichiers sous "linux"

### Déplacer un fichier.md dans la console
`$ mv <fichier> <destination>`





