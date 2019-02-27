# Journal MobiliSCO-web

21/1/18

## Visual studio code  
    
On a refait sur VSC ce qu'on fait avec console/terminal
On a modifié sur VSC, pushé sur github, modifié sur Github, pullé
Différencié git (local) et github (distant, interface web collaborative)
sauvegardé (CRTL S)
repéré icone de Source control - le graph avec branches (invitation à commiter). Message du commit CRLT ENTER pour commiter
icone en bas avec flèches montante/descendante (invitation à pusher)

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
Focus sur le business model (modède d'entreprise), plus que sur le business plan (plan d'affaires : exécution concrète) ?

lu sur wikipedia :
- __Eric RIES__, _"The Lean Startup: How Today's Entrepreneurs Use **Continuous Innovation** to Create Radically Successful Businesses"_ 2008
Analyse des échecs de ses deux entreprises : _"elle partait d'une technologie, au lieu de la développer à partir des besoins à satisfaire"_
- __Ash MAURYA, ""Running Lean: How to Iterate from Plan A to a plan that works"__ a développé le lean canvas, liste de neuf questions pour tester l'adéquation du produit au marché
- __Steve BLANK, "The Four Steps to the Epiphany"__ : customer developpement
"Get out of the building"
Most of the answers lie outside the building — not on your computer, or in
the lab. You have to get out and directly engage customers.
- __Définition du pivot__ : dans le processus d'apprentissage par itérations, une startup peut découvrir par des retours terrain avec de vrais clients que son produit n'est pas adapté, qu'il ne répond pas à un besoin. Toutefois, pendant ce processus d'apprentissage, il se peut que la startup ait identifié un autre besoin (souvent connexe au premier produit). Lorsque la startup change de produit pour répondre à ce nouveau besoin identifié, on dit qu'elle a effectué un « Pivot ». 

- __Antagonisme des équipes dèv et ops__
l'objectif principal d'une équipe ops est de garantir la stabilité du système. De ce fait, l'équipe se concentre sur la contrainte qualité, au détriment du temps et du coût. La meilleure manière d'atteindre son objectif est de contrôler sévèrement la qualité des changements qui sont apportés au système qu'elle maintient.

De son côté, l'équipe de développement a pour objectif principal d'apporter les changements nécessaires au moindre coût et le plus vite possible, souvent au détriment de la qualité lorsque des retards viennent mettre le plan en péril.

L'antagonisme de ces objectifs, intrinsèques à l'activité de chaque type d'équipe, est encore exacerbé par la séparation des devoirs, au point de conduire à un rejet de sa propre responsabilité et au blâme de l'équipe « sœur », l'équipe de développement blâmant son alter ego ops pour les retards, et l'équipe d'exploitation tenant l'équipe de développement responsable des problèmes de qualité du code et des incidents survenus en production de ce fait.

Plus généralement, organiser une entreprise comme un ensemble d'équipes ayant des objectifs indépendants les uns des autres avec des indicateurs spécifiques à chaque équipe va __générer des optimums locaux__ et des guerres entre équipes,

8/2/19 et 10/2/19
Rempli et présenté le lean canvas de MobiliSCO web
Démarré lecture de Running Lean
Le lean : faire des choix d'autant moins éclairés qu'ils sont réversibles.  

16/2/19
- Premières user stories dans le backlog : rédigées plus en fonction de la version Access de MobiliSCO que du lean canvas.
En fait, dans le vrai lean canvas la cohorte à convaincre, c'est moi !
- J'affine l'objectif du programme infusion, concernant l'apprentissage du code :   
Savoir commencer des itérations et les faire avancer suffisamment pour obtenir de l'aide pour les finir.   
Etre en capacité d'adapter dans MobiliSCO le code des fonctionnalités de DossierSCO (création de comptes établissement et agents, import de SIECLE)  

26/2/19
- Ajout important relatif au problème à résoudre : la saisie en doublon des encaissements, jamais résolue par MobiliSCO Access. C'est la fonctionnalité qui fera la différence, quel que soit la cohorte !
- Relecture des étapes de lean startup :
Stage 1: Problem/Solution Fit. Key question: Do I have a problem worth solving?
The minimum feature set to address the right set of problems, which is also known as the minimum viable product (MVP)
Stage 2: Product/Market Fit. Key question: Have I built something people want?
Stage 3: Scale
Pivot Before Product/Market Fit, Optimize After

