# Journal MobiliSCO-web

21/1/18

## Visual studio code  
    
On a refait sur VSC ce qu'on fait avec console/terminal
On a modifié sur VSC, pushé sur github, modifié sur Github, pullé
Différencié git (local) et github (distant, interface web collaborative)
sauvegardé (CRTL S)
repéré icone graph avec branches (invitation à commiter) icone en bas (invitation à pusher)

Notion de cohortes, à interroger pour valider les prédictions et paris. 3 caractéristiques :
- pas trop grandes
- pas trop hétérogènes
- atteignables

Caractère isofonctionnel d'une application : fonctionnalités à reproduire sans discussion

## Backlog et userstories

Construire un backlog : https://www.jpattonassociates.com/the-new-backlog/

### user story : 3 C
_Carte_ (permet de lancer la conversation, sans spécifier, exprimer le besoin minimum),  
_Conversation_,   
_Confirmation_ (les cases-à-cocher : doit faire ceci, ne doit pas faire cela)
use case ; on a fait le deuil de spécifier

### granularité des user stories
odyssée, epic (qq mois)
feature (qq semaines)
user story (qq jours) User activity
tâche (qq heures) user task

Quelles que soient les ressources (nombre de dèeloppeurs, compétences), une user story fera toujours quelques jours. C'est un horizon d'action.
"Build the map in a way that helps you tell the story."





Agile Product Ownership in a Nutshell
https://www.youtube.com/watch?v=502ILHjX9EE

## Choix du langage : 
- Langage Objet (impératifs) -> effets de bord
"un paradigme de programmation qui décrit les opérations en séquences d'instructions exécutées par l'ordinateur pour modifier l'état du programme."
- langages fonctionnels minimisent les effets de bord. 
Comme le changement d'état et la mutation des données ne peuvent pas être représentés par des évaluations de fonctions, la programmation fonctionnelle ne les admet pas, au contraire elle met en avant l'application des fonctions, contrairement au modèle de programmation impérative qui met en avant les changements d'état
ex:    C, C++, Python, PHP, Java, JavaScript

## Github 
- je perçois mieux le sens de la commande ADD.
Image de l'antichambre, de la loge du coursier entre deux bâtiments. 
ADD permet de committer ensuite une partie seulement du travail effectué, et de rendre ses commits homogènes, compréhensibles pour autrui et pour soi plus tard
- le fichier caché.git

24/1/19

- relu et commenté le journal, le readme, les questions
- exercice : commiter séparément ces différents docs mis à jour.
Depuis la console : ADD, puis COMMIT
Mais depuis VSC ?

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

## Démo de fin de sprint zéro
Objet : échange avec les stakeholders
montrer l'incrément, consolidé durant le sprint.
Programmer la release suivante  

## Rétro de fin de sprint zéro (manifeste agile)

__5 phases__
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

- Commit sur journal avec retro, depuis console
- Commit depuis github (crayon Edit)




