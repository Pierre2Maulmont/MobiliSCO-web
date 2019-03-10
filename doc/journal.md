# Journal MobiliSCO-web

21/1/18

## Premiers pas sur Visual studio code  
    
On a refait sur VSC ce qu'on fait avec console/terminal
On a modifié sur VSC, pushé sur github, modifié sur Github, pullé
Différencié git (local) et github (distant, interface web collaborative)
sauvegardé (CRTL S)
On a commité.

## Choisir un langage : 
- Langage Objet (impératifs) -> effets de bord
"un paradigme de programmation qui décrit les opérations en séquences d'instructions exécutées par l'ordinateur pour modifier l'état du programme."
- langages fonctionnels minimisent les effets de bord. 
Comme le changement d'état et la mutation des données ne peuvent pas être représentés par des évaluations de fonctions, la programmation fonctionnelle ne les admet pas, au contraire elle met en avant l'application des fonctions, contrairement au modèle de programmation impérative qui met en avant les changements d'état
ex:    C, C++, Python, PHP, Java, JavaScript

## Gammes sur Git, avec la console

24/1/19

- relu et commenté le journal, le readme, les questions
- exercice : commiter séparément ces différents docs mis à jour.
Depuis la console : ADD, puis COMMIT

26/1/19

- pratique syntaxe Markdown
https://www.markdownguide.org/basic-syntax/
- 1ère lecture approfondie de jpattonassociates : The New User Story Backlog is a Map. Inspirant pour dédramatiser l'ampleur de la construction de MobiliSCO-web
- git add pour chaque fichier.md modifié : échec

29/1/19

- visionné "Agile Product Ownership in a Nutshell" et retenu que le mot le  plus important à prononcer est "NO", pour le PO
- La curiosité pour la langue constitue un moteur de rechange pour lire des ressources en anglais
- Avec Stéphane, git add différenciés sur la console

30/1/19 : 
- git add différenciés tout seul  

Message nouveau sur terminal :  
_git status_
_On branch master_
_Your branch and 'origin/master' have diverged,_
_and have 2 and 3 different commits each, respectively._
 _ (use "git pull" to merge the remote branch into_ _yours)_

Solution : git pull pour avoir toutes les mises à jour en local, puis add et commit différenciés. Mais je risque d'écraser un "local" plus à jour que le "remote" ??  
Yannick me rassure, la gestion des conflits existe entre les niveaux local/remote. Le ADD concerne seulement un échange entre mon répertoire et l'index (deux espaces distincts, mais local)

31/1/19
- lu les bases de l'impact mapping__
_"Une carte d’impact met tous les livrables dans le contexte des changements de comportements qu’ils sont censés créer"_  
- Résolu avec Margot et validé avec Stéphane le conflit 

1/2/19
- Abordé utilisation de git pour les fichiers privés de DossierSCO sur keybase, avec Stéphane. 
Au lieu de Github, c'est Keybase qui devient le remote : 
_git clone keybase://team/dossiersco/a_suivre_

Versionné le répertoire a_suivre. 
Problème à fixer : placard.md créé n'apparait pas sur la console.
_kolel@DESKTOP-6TQRVF0 MINGW64 /k/team/dossiersco  
$ git status  
fatal: Not a git repository (or any of the parent directories): .git_  

2/2/19  

## Premières démo et rétro de fin de sprint

1) Ambiance du sprint : enthousiasme partagé
- Je trouve le format adapté (13h hebdo)
- Plus progressé sur git que les 8 derniers mois
- A aucun moment, je n'ai ressenti de perte de sens, ni au quotidien, ni à long terme.
- découvert une légitimité de parler code ou environnement du code, sans être développeur

2) Bien passé : séparer les faits et la discussion
Revue des faits : la quotidienne par écrit, le blocage sur les conflits dans git et VSC, le versionning de Keybase dans git

3) Frottements 
- Peu utilisé encore le project de Github, comme incitation à agir
- A terme, il faudra se poser la question du financement de ce programme, pour le rendre viable et durable
- Stéphane : peur que le cadre flottant me désoriente

4) Actions correctrices : néant

5) Rétro de la rétro : même si on manque cette fois de grain à moudre, ça a permis de poser le cadre de la rétro pour les fois prochaines

3/2/19  
Je fais mes gammes : 
- Commit sur journal avec retro, et push depuis console
- commit depuis VSC, puis vérification par git log sur console. push depuis VSC
- Modif et commit depuis github (crayon Edit), push & pull depuis VSC. Deux couleurs (vert et bleu) montrent le conflit et 4 onglets en surbrillance pour le résoudre. Je choisis le dernier : accepter les 2 modif (celle du remote et celle du local). Nouveau push&pull depuis VSC : échec du pull, "git : Pulling is not possible because you have unmerged files"
Nouvelle modif du journal sur VSC, sauvegarde, commit échoue : "there are no changes to commit"
Sur console : both modified (en rouge) : journal.md
Autre modif par VSC, là le commit s'effectue. 
Rien à puller, 2 à pusher.

5/2/19
Abordé notions générales sur le lean start up

8/2/19 et 10/2/19
Rempli et présenté le lean canvas de MobiliSCO web
Démarré lecture de Running Lean
Le lean : faire des choix d'autant moins éclairés qu'ils sont réversibles.
L'image des bords tirés à travers l'océan : on peut revenir facilement sur un mauvais cap si on l'évalue 24h après que si on navigue une semaine entière.

16/2/19
- Premières user stories dans le backlog : rédigées plus en fonction de la version Access de MobiliSCO que du lean canvas.
En fait, dans le vrai lean canvas la cohorte à convaincre, c'est moi !
- J'affine l'objectif du programme infusion, concernant l'apprentissage du code :   
Savoir commencer des itérations et les faire avancer suffisamment pour obtenir de l'aide pour les finir.   
Etre en capacité d'adapter dans MobiliSCO le code des fonctionnalités de DossierSCO (création de comptes établissement et agents, import de SIECLE)  

26/2/19
- Ajout important dans le lean canvas, concernant le problème à résoudre : la saisie en doublon des encaissements, jamais résolue par MobiliSCO Access. __Problème commun à toutes les cohortes__. Doublon créé par Access, pour permettre l'édition d'un tableau de synthèse des encaissements très utile. 

03/03/19
- J'alimente le journal en vue de la démo de fin de sprint
- __Premiers pas sur JavaScript__
Ouvert un fichier notes_javascript.md
Utilisé la __console web__ de Firefox
Utilisé __l'ardoise__ JavaScript de Firefox + la console web
Installé __Visual Studio live share__, pour partager à distance l'éditeur de code
Appris à __documenter__ à partir de Mozilla Developer network
- Refait mes gammes sur deux __fonctions enchâssées__ affichant sur la console des EPLE, avec noms, UAI, latitude et longitude. 
Utilisé les méthodes console.log, construit des tableaux, utilisé la boucle .map

5/3/19
- Utilisé VSC et fichier html sur firefox avec du js 
- Modifié mise en page html et fonction js
- Cloné sous VSC

9/3/19
- Pull request sur Open carte comptable
- Add et commit depuis VSC
- séparé du code dans deux fichiers.js et .html différents
- cherché et trouvé du texte dans le code du github du blog de beta.gouv

10/3/19

## Préparation de la démo de fin de sprint
PR Open carte comptable
exécution de 2 fichiers html et js en local


## Préparation de la rétro de fin de sprint 0.2 (manifeste agile)

1) Ambiance du sprint : la tendance hors les faits
joie des premiers pas sur JS
Pressions extérieures au sprint qui perturbent l'adéquation entre objectif et moyens que je me suis fixés initialement.

Infusion progressive de la représentation des postures d'apprenant/coach

2) Bien passé : revue des faits, sans discussion
- Approfondi les outils VSC, git, github, console web
- surmonté le vertige du changement d'outils, de vues
- je construis progressivement l'autonomie dans l'apprentissage de JS (MDN, coaching de Stéphane, livre de Thomas, interactions avec les autres dèv de l'entourage)
- j'articule mieux Quotidienne - Journal - Documentation technique
- satisfaction sur les premiers pas en JS : j'ai le sentiment d'écrire du code, même quand je recopie celui du coach

3) Frottements 
- toujours peu utilisé au quotidien le project de Github, comme incitation à agir, avec l'apprentissage du code JS.
Timidité à créer une userstory car elles ont la taille modeste d'une tâche mais qui me prend plusieurs séquences de travail
- Crainte de lasser le coach par mon besoin de faire répéter pour assimiler les commandes de base
- Difficulté à tenir la capacité fixée préalablement. Je reporte fréquemment nos rendez-vous
- Je suis impatient de pouvoir écrire du code utile pour MobiliSCO


4) Actions correctrices : 
- Ne pas baisser la capacité, au risque de perdre le sens
Prévoir mieux et prévenir sur les reports et déculpabiliser
- Apercevoir le code futur de MobiliSCO dans l'apprentissage des briques de base

5) Rétro de la rétro : 