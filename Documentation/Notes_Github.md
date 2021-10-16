# Notes sur cours OpenClassroom
https://openclassrooms.com/fr/courses/2342361-gerez-votre-code-avec-git-et-github?status=published


## CONSOLE Git bash
https://www.youtube.com/watch?v=SWYqp7iY_Tc

__pwd :__ dans quel répertoire je suis (print working directory)
pwd --help (afficher l'aide de la commande)
__ls :__ voir la liste des fichiers et répertoires dans le dossier courant (sur une ligne avec des espaces).
__ls -a__ : affiche deux dossiers cachés "." (répertoire courant) et ".." (répertoire parent, en amont). __-l__ donne plus d'infos (notammment: "d" en début de ligne = dossier ; "-" = fichier. __ls -la__ : affiche tout avec + d'infos.
__cd NomDuRépertoire/NomSousRépertoire :__ se placer dans un répertoire (change directory) 
__cd ..__ remonter au répertoire en amont 
__mkdir :__ créer un dossier  (make directory). ex: mkdir "mon test" (sinon la console crée 2 dossiers) ou mkdir mon\ test (antislash - caractère inhibiteur - permet de lire l'espace comme une lettre normale et non comme un séparateur)
__touch :__ créer un fichier  ex1: touch bonjour.txt  ex2: touch test/bonjour.txt (crée dans le répertoire "test").
__cat :__ afficher le contenu d’un fichier 
__rm -Rf fichier.md :__ remove sans demander confirmation d'un fichier, répertoire. DANGER : à la racine, suivi de *, on efface tout le disque dur !
__q ou ESC q__ pour sortir après un git logpw
__La touche TAB__ : Autocomplétion, ie complète automatiquement les possibilités de commande déjà saisies. ls Cours 2xTAB affichent les possibilités multiples (Cours1/ Cours2)
__Les flèches__ : remonte aux saisies précédentes
__CTRL r :__ + début de la commande recherchée
__CTRL a __CTRL e :__ aller au tout début ou à la fin de la ligne de commande en cours de saisie
__mv :__ déplace un fichier (move) dans le répertoire qui suit. ex: _mv bonjour.txt test_ (déplace dans répertoire test)
         renomme un fichier. Ex: mv bonjour.txt salut.txt (renomme bonjour en salut) (move signifie aussi "déplacer d'un nom à un autre")
__cp :__ copier un fichier vers un endroit. Ex: cp bonjour.txt repertoire.
__rm fichier.txt :__ (supprimer un fichier)   __rm -r__ repertoire (supprimer un répertoire)

## PREMIERS COMMIT


__git status :__ dans quel état se trouve le repository, ie le répertoire de travail 

__git init :__ Pour activer un dossier comme repository Git, géré par Git, il suffit de se placer dans ce dossier avec le Terminal puis d'utiliser la commande git init. 

__git add fichier.md :__ Pour gérer un repository, Git génère un index de tous les fichiers dont il doit faire le suivi. Lorsque vous créez un fichier dans un repository, vous devez donc l'ajouter à l'index Git à l'aide de la commande git add nomDeVotreFichier.extension. 
Par exemple : git add checklist-vacances.md
Pour gagner du temps, vous pouvez ajouter tous les fichiers dans le répertoire courant en tapant __git add .__

__git commit :__ Lorsque vous modifiez votre repository, vous devez demander à Git d'enregistrer vos modifications en faisant un git commit. L'option-m vous permet de lui envoyer un message décrivant les modifications effectuées, ce qui s'avèrera très utile pour vous par la suite, you'll see!  Par exemple : 
__git commit -m__ "Ajouté ma checklist-vacances.md (woohoo!)"

__git log :__ affiche la liste de tous les commits que vous avez réalisés ! 
Le sens de lecture du log est le suivant : on part du commit le plus récent en haut de la liste, au commit le plus vieux en bas de la liste. 
Dans la liste de cet historique, chaque commit est répertorié avec :
son SHA : son identifiant unique, qui se présente sous forme d'une longue chaîne de caractères et de nombres. 
son auteur : qui a fait le commit, utile lorsque vous travaillez à plusieurs sur un projet
sa date
sa description

__git commit -a -m :__ si vous ne faites que mettre à jour un fichier que vous aviez déjà ajouté à l'index, vous pouvez condenser ces deux étapes de la façon suivante : 
git commit -a -m "Ajouté itinéraire dans checklist-vacances.md"
L'option   -a demande à Git de mettre à jour les fichiers déjà existants dans son index. 

__git checkout :__ 
Lorsque vous effectuez une série de commits sur un projet, il peut vous arriver de vouloir remonter dans le temps à la recherche d'erreurs éventuelles par exemple. Pour vous positionner sur un commit donné de votre historique, il vous suffit d'utiliser la commande git checkout de la façon suivante : 
git checkout ShaDuCommit
Pour revenir à votre branche principale (au commit le plus récent), on utilise la même commande : git checkout master


On ne peut pas vraiment "supprimer" un commit, mais on a plusieurs options pour l'annuler. Cependant, ces options ont des limites et sont à utiliser avec prudence et parcimonie !
git revert : vous pouvez "revert" un commit, c'est-à-dire créer un nouveau commit qui fait l'inverse du précédent, avec la commande suivante : git revert SHADuCommit
Attention, ça crée un nouveau commit dans l'historique du coup ! (le commit "inverse" du précédent)
__git commit --amend -m :__ Sinon, si vous voulez simplement modifier le message de votre dernier commit, vous pouvez utiliser la commande suivante :
git commit --amend -m "Votre nouveau message"
... mais attention, vous ne pouvez modifier ce message que si vous n'avez pas encore pushé votre commit sur l'origine !
git reset --hard‌ : Je n'ai pas encore fait mon nouveau commit, mais je veux annuler tous les changements que je n'ai pas encore commités. Possible avec un reset !
----------------------------------------------
Communiquer avec d'autres développeurs et signaler des problèmes de code en déclarant des "issues" ;
Partager des morceaux de code en ligne à l'aide de "gists" ;
Proposer des modifications de code à d'autres repos en faisant des "pull requests" ;

La touche t ???

__git clone URL__

## le REMOTE : 
l’espace distant ou je stocke le code, par sécurité et pour le rendre visible

__git push origin master :__ après avoir créé un repository sur github avec un readme, on modifie le fichier readme sur la console git bash. on se place dans le repository (cd), on regarde ce qu’il y a dedans (ls), on l’ajoute à l’index git (git add), on vérifie (git status).
on affiche le contenu du fichier (cat readme.md). On le modifie dans l’éditeur Sublim text, on le push depuis la machine locale vers le remote (origin) et sa branche (master)

__git pull origin master :__ quelqu'un a modifié le fichier README.md, depuis github (icone stylo) et a commité. Je voudrais bien faire descendre cette seule modif sur ma machine locale, sans récupérer l’ensemble du repo (git clone)

## BRANCHES
__git branch :__ indique le nom de la branche (par défaut, à la création d’un repository par git init, Git créé une branche qu’il appelle master) sur laquelle on est (l’étoile)
git branch NomBranche : créé une nouvelle branche. 
__git checkout NomBranche :__ on change de branche
git checkout -b : pour créer une branche et vous y positionner. Ainsi, au lieu de taper git branch ma-branche, puis git checkout ma-branche, vous pouvez regrouper ces deux opérations en une seule commande : __git checkout -b ma-branche__

__git merge :__ git checkout brancheA, pour ajouter à A ce qu’on a fait dans B puis on utilise la commande : git merge brancheB (on merge B dans A)

Si conflit, ne pas oublier de faire un commit (sans commentaire obligatoire), une fois résolu dans la console.

__git blame NomDeFichier.md :__ montre le dernier commit fait sur une ligne (par les premiers caractères de son Sha) - git blame nomdufichier.extension

__git show Premiers_caractères_du_commit :__ pour afficher les modifs (avec des + et des -)


__Créez le fichier .gitignore :__ pour y lister les fichiers que vous ne voulez pas versionner dans Git (les fichiers comprenant les variables de configuration, les clés d'APIs et autres clés secrètes, les mots de passe, etc.). Listez ces fichiers ligne par ligne dans .gitignore en indiquant leurs chemins complets, par exemple : 
motsdepasse.txt
config/application.yml

Le fichier .gitignore doit être tracké comme vos autres fichiers dans Git : vous devez donc l'ajouter à l'index et le committer.

__git stash :__ pour mettre de côté (planquer) sans faire de commit superflu. 
git stash pop (attention ça supprime ce qu’il y a dans le stash !)

## COLLABORER

Récupérer le code d'un projet open-source, faire mes modifications, les proposer à la personne en charge du projet  
__pull request__
### step 1 : récupérer le repo
Bouton fork en haut à droite : copie le repository du projet sur lequel je veux contribuer sur mon compte github. Je vérifie ensuite que je suis bien sur mon compte (barre URL de github/P2maulmont).  
Ensuite, bouton HTTPS clone URL, pour récupérer l’URL.
Sur la console git, créer un repo et l'initialiser comme repo git, puis git clone URL_du_projet.  
ls (lister les fichiers du répertoire courant), pour vérifier que le projet est bien là. cd répertoire, pour se placer dedans ; git log, pour voir tous les commit du projet.
### step 2 : faites vos modifs
Avant tout, regarder dans la documentation (le README ou PULL REQUESTS, le plus souvent) le mode d’emploi des contribution (Contributing). Généralement, on y précise les formes attendues des contributions (syntaxe des commits, tests…).
Sur votre machine, placez-vous dans le repo que vous venez de créer, créez une nouvelle branche où vous allez faire vos modifications et placez-vous dedans :
__git checkout -b my-new-feature__

Faites vos modifications dans la nouvelle branche et "committez"-les

Envoyez vos modifications sur GitHub en faisant un git push de votre nouvelle branche : 
__git push origin my-new-feature__
Notez que nous ne faisons pas un "git push origin master" : ce n'est pas votre branche principale "master" mais bien votre nouvelle branche "my-new-feature" que vous envoyez sur GitHub ! 

### step 3 : proposez vos modifs au projet
Une fois vos modifications envoyées sur votre fork GitHub, il vous reste à transmettre votre demande de modifications en faisant une pull request. Pour cela, placez-vous sur votre fork GitHub, sur votre nouvelle branche, et cliquez sur "Compare & pull request".

Vous allez alors être amenés à rédiger un message pour présenter votre proposition de modifications à l'auteur du projet.
Vous remarquerez que sous votre message, GitHub propose un comparatif détaillé de vos modifications par rapport au projet auquel vous souhaitez contribuer ???

Une fois votre pull request envoyée, l'auteure du projet voit sur son Github : pull request = 1. Elle consultera vos propositions, et vous recevrez une notification par GitHub lorsqu'elle les aura intégrées ou refusées. Il se peut aussi qu'elle vous contacte pour vous demander des précisions avant d'accepter ou non votre PR.

## Conseils Yannick autour de la rédaction des commit

- "modifié fichier.md" renseigne peu sur le changement effectué. "Ajouté un contact DNE" en dit plus. 
- faire git pull AVANT git push
- __git pull --rebase__: fetch + rebase (et non merge), ie on insère les commit des autres et on repart d'une base actualisée par ces commits, avant de la confronter à mes commit à moi.
- ___add . embarque tout__
- __git log --oneline__ : affiche le sha + le commit
- __git show n°duSha__ : (pour recopier le sha, bouton central souris !)
Utilisation pour s'informer de l'activité et de décider d'entrer voir les modifications d'un seul sha

## Erreurs
403 : pas de droits pour agir
404 : page introuvable

