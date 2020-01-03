# HTML 5 et CSS - OpenClassroom fév 18

-> notes prises directement sur page d'exercice salveRagazzi.html

Html : le contenu <> CSS : la présentation de la page
Editeur de textes, pour rédiger du code : sublimetext, notepad++
Le navigateur transforme le code en page visible à l'écran
-> Firefox, afficher la commande "ouvrir fichier" : menu, customize, drag & drop OpenFile. 
Ensuite, clic sur chevrons, Openfile.

- balises en paires : <title>Pierre de MAULMONT</tittle>
- balises seules : <br/> retour à la ligne
<image nom="photo.jpg" />
- commentaire : <!-- mon commentaire -->

Pour bien structurer son texte, 
- on utilise les balises <p> <p/> (ça saute une ligne entre chaque paragraphe). A l'intérieur du paragraphe, <br/> permet des retours à la ligne.
- balises de titre (de 1 à 6) : <h1> <h1/>
- italiques : em
- gras : strong
- surligné : mark
- liste à puces :	Ul dit : ça, c'est un liste à puces ; li dit "ça, c'est une puce"
<ul>
	<li>Fraises</li>
	<li>Cerises</li>
</ul>
- Liste numérotée
<ol>	
	<li>concombres</li>
	<li>navets</li>
</ol>

LES LIENS
- Vers une page web :
<a href=https://openacademie.beta.gouv.fr>intitulé_du_lien</a>
Adresse URL puis Intitulé du lien sur lequel on clique.
- La page 2 de mon site : 
<a href="salve_Page2.html">ça marche aussi pour la page 2 de mon site (lien relatif : entre pages d'un même site)</a>
S'il y a un sous-dossier, on l'indique avant l'URL : <a href="Sous dossier page 2/salve_Page2.html">Lien</a>
- lien vers un endroit sur la même page : le couple =# et =id
<a href="#cuisine">La cuisine</a><br />
<h2 id="cuisine">Section cuisine</h2>

- infobulle : rajouter après l'url l'attribut title="texte bulle" (et avant la fermeture du crochet>)
<a href="https://openacademie.beta.gouv.fr/" title="c'est trop cool">OpenAcademie</a>
- attribut target "_blank" pour nouvelle fenêtre <br />
<a href="https://openacademie.beta.gouv.fr/" target="_blank">OpenAcademie</a>

- Email : <a href="mailto:openacademie@sgmap.fr">Envoyez-moi un email !</a><br />

- télécharger un fichier : a href="NomDuFichier.zip"
<a href="gemasco.zip">Télécharger Gemasco</a>
attention: le fichier doit se trouver dans le même dossier

Lien vers une ancre située dans une autre page
Alors là je vous préviens, on va faire le Mégamix !
L'idée, c'est de faire un lien qui ouvre une autre page ET qui amène directement à une ancre située plus bas sur cette page.
En pratique c'est assez simple à faire : il suffit de taper le nom de la page, suivi d'un dièse (#), suivi du nom de l'ancre.
Par exemple :<a href="ancres.html#rollers">


CSS, APPLIQUER un STYLE : class et id

Ce que je vous ai montré jusqu'ici a quand même un défaut : cela implique par exemple que TOUS les paragraphes possèdent la même présentation (ici, ils seront donc tous écrits en bleu).
Comment faire pour que certains paragraphes seulement soient écrits d'une manière différente ?
Pour résoudre le problème, on peut utiliser ces attributs spéciaux qui fonctionnent sur toutes les balises :
•	l'attributclass;
<h1 class=""> </h1>
<p class=""> </p>
<img class="" />

<p class="introduction">Bonjour et bienvenue sur mon site !</p>
Sur la page css,
.introduction
{
    color: blue;
}
•	l'attributid.
fonctionne exactement de la même manière queclass, à un détail près : il ne peut être utilisé qu'une fois dans le code.
Quel intérêt ? Il y en a assez peu pour tout vous dire, cela vous sera utile si vous faites du JavaScript plus tard pour reconnaître certaines balises. D'ailleurs, nous avons déjà vu l'attributiddans le chapitre sur les liens (pour réaliser des ancres). En pratique, nous ne mettrons des id que sur des éléments qui sont uniques dans la page, comme par exemple le logo :
<img src="images/logo.png" alt="Logo du site" id="logo">

Si vous utilisez des id, lorsque vous définirez leurs propriétés dans le fichier CSS, il faudra faire précéder le nom de l'id par un dièse (#) :
#logo
{
    /* Indiquez les propriétés CSS ici */
}
Les balises universelles
Il arrivera parfois que vous ayez besoin d'appliquer une class(ou un id) à certains mots qui, à l'origine, ne sont pas entourés par des balises.
En effet, le problème de class, c'est qu'il s'agit d'un attribut. Vous ne pouvez donc en mettre que sur une balise. Si, par exemple, je veux modifier uniquement « bienvenue » dans le paragraphe suivant :
<p>Bonjour et bienvenue sur mon site !</p>
Cela serait facile à faire s'il y avait une balise autour de « bienvenue » mais, malheureusement il n'y en a pas. Par chance, on a inventé… la balise-qui-ne-sert-à-rien.
En fait, on a inventé deux balises dites universelles, qui n'ont aucune signification particulière (elles n'indiquent pas que le mot est important, par exemple). Il y a une différence minime (mais significative !) entre ces deux balises :
•	<span> </span>: c'est une balise de type inline, c'est-à-dire une balise que l'on place au sein d'un paragraphe de texte, pour sélectionner certains mots uniquement. Les balises<strong>et<em>sont de la même famille. Cette balise s'utilise donc au milieu d'un paragraphe et c'est celle dont nous allons nous servir pour colorer « bienvenue ».
•	<div> </div>: c'est une balise de type block, qui entoure un bloc de texte. Les balises<p>,<h1>, etc. sont de la même famille. Ces balises ont quelque chose en commun : elles créent un nouveau « bloc » dans la page et provoquent donc obligatoirement un retour à la ligne.<div>est une balise fréquemment utilisée dans la construction d'un design, comme nous le verrons plus tard.
Pour le moment donc, nous allons utiliser plutôt la balise<span>. On la met autour de « bienvenue », on lui ajoute une classe (du nom qu'on veut), on crée le CSS et c'est gagné !
<p>Bonjour et <span class="salutations">bienvenue</span> sur mon site !</p>

.salutations
{
    color: blue;
}
deux balises génériques et, comme par hasard, la seule différence entre les deux est que l'une d'elle est inline et l'autre est block :
•	<span></span>(inline) ;
•	<div></div>(block).

FORMATER LE TEXTE EN CSS

La taille
Pour modifier la taille du texte, on utilise la propriété CSSfont-size. Mais comment indiquer la taille du texte ? C'est là que les choses se corsent car plusieurs techniques vous sont proposées :
•	Indiquer une taille absolue : en pixels, en centimètres ou millimètres. Cette méthode est très précise mais il est conseillé de ne l'utiliser que si c'est absolument nécessaire, car on risque d'indiquer une taille trop petite pour certains lecteurs.
font-size: 16px;
•	Indiquer une taille relative : en pourcentage, « em » ou « ex », cette technique a l'avantage d'être plus souple. Elle s'adapte plus facilement aux préférences de taille des visiteurs.
Ma technique préférée consiste à indiquer la taille en « em ».
•	Si vous écrivez1em, le texte a une taille normale.
•	Si vous voulez grossir le texte, vous pouvez inscrire une valeur supérieure à 1, comme1.3em.
•	Si vous voulez réduire le texte, inscrivez une valeur inférieure à 1, comme0.8em.
Faites attention : pour les nombres décimaux, il faut mettre un point et non une virgule. Vous devez donc écrire « 1.4em » et non pas « 1,4em » !
p
{
    font-size: 0.8em;
}
h1
{
    font-size: 1.3em;
}
En résumé
•	On modifie la taille du texte avec la propriété CSSfont-size. On peut indiquer la taille en pixels (16px), en « em » (1.3em), en pourcentage (110%), etc.
•	On change la police du texte avecfont-family. Attention, seules quelques polices sont connues par tous les ordinateurs. Vous pouvez cependant utiliser une police personnalisée avec la directive@font-face: cela forcera les navigateurs à télécharger la police de votre choix.
•	De nombreuses propriétés de mise en forme du texte existent :font-stylepour l'italique,font-weightpour la mise en gras,text-decorationpour le soulignement, etc.
•	Le texte peut être aligné avectext-align.
•	On peut faire en sorte qu'une image soit habillée (« entourée ») de texte avecfloat.
Couleurs et fond
Ainsi, si je veux afficher un soleil en image de fond (figure suivante), en un unique exemplaire (no-repeat), toujours visible (fixed) et positionné en haut à droite (top right), je vais écrire ceci :
body
{
    background-image: url("soleil.png");
    background-attachment: fixed; /* Le fond restera fixe */
    background-repeat: no-repeat; /* Le fond ne sera pas répété */
    background-position: top right; /* Le fond sera placé en haut à droite */
}

Transparence
p
{
    opacity: 0.6;
}
La notation RGBa
CSS3 nous propose une autre façon de jouer avec la transparence : la notation RGBa. Il s'agit en fait de la notation RGB que nous avons vue précédemment, mais avec un quatrième paramètre : le niveau de transparence (appelé « canal alpha »). De la même façon que précédemment, avec une valeur de 1, le fond est complètement opaque. Avec une valeur inférieure à 1, il est transparent.
p
{
    background-color: rgba(255, 0, 0, 0.5); /* Fond rouge à moitié transparent */

Le positionnement inline-block
Les manipulations que demande le positionnement flottant se révèlent parfois un peu délicates sur des sites complexes. Dès qu'il y a un peu plus qu'un simple menu à mettre en page, on risque d'avoir à recourir à desclear: both;qui complexifient rapidement le code de la page.
Une meilleure technique consiste à transformer vos éléments eninline-blockavec la propriétédisplay.
Quelques petits rappels sur les éléments de type inline-block :
•	Ils se positionnent les uns à côté des autres (exactement ce qu'on veut pour placer notre menu et le corps de notre page !).
•	On peut leur donner des dimensions précises (là encore, exactement ce qu'on veut !).
Nous allons transformer en inline-block les deux éléments que nous voulons placer côte à côte : le menu de navigation et la section du centre de la page.
Argh ! 
Ce n'est pas tout à fait ce qu'on voulait. Et en fait, c'est normal : les éléments inline-block se positionnent sur une même ligne de base (appelée baseline), en bas.
Heureusement, le fait d'avoir transformé les éléments en inline-block nous permet d'utiliser une nouvelle propriété, normalement réservée aux tableaux :vertical-align. Cette propriété permet de modifier l'alignement vertical des éléments.

nav
{
    display: inline-block;
    width: 150px;
    border: 1px solid black;
    vertical-align: top;
}

section
{
    display: inline-block;    
    border: 1px solid blue;
    vertical-align: top;
}

En HTML, la plupart des balises peuvent se ranger dans l'une ou l'autre de deux catégories :
•	Les balises inline : c'est le cas par exemple des liens<a></a>.
•	Les balises block : c'est le cas par exemple des paragraphes<p></p>.
is comment je reconnais une balise inline d'une balise block ?
C'est en fait assez facile :
•	block : une balise de type block sur votre page web crée automatiquement un retour à la ligne avant et après. Il suffit d'imaginer tout simplement un bloc. Votre page web sera en fait constituée d'une série de blocs les uns à la suite des autres. Mais vous verrez qu'en plus, il est possible de mettre un bloc à l'intérieur d'un autre, ce qui va augmenter considérablement nos possibilités pour créer le design de notre site !
•	inline : une balise de type inline se trouve obligatoirement à l'intérieur d'une balise block. Une balise inline ne crée pas de retour à la ligne, le texte qui se trouve à l'intérieur s'écrit donc à la suite du texte précédent, sur la même ligne (c'est pour cela que l'on parle de balise « en ligne »).
 DIMENSIONS DES BLOCS, MARGES :
Si vous voulez que le texte ne dépasse pas des limites du paragraphe, il va falloir utiliser la propriétéoverflow. Voici les valeurs qu'elle peut accepter :
•	visible(par défaut) : si le texte dépasse les limites de taille, il reste visible et sort volontairement du bloc.
•	hidden: si le texte dépasse les limites, il sera tout simplement coupé. On ne pourra pas voir tout le texte.
•	scroll: là encore, le texte sera coupé s'il dépasse les limites. Sauf que cette fois, le navigateur mettra en place des barres de défilement pour qu'on puisse lire l'ensemble du texte. C'est un peu comme un cadre à l'intérieur de la page.
•	auto: c'est le mode « pilote automatique ». En gros, c'est le navigateur qui décide de mettre ou non des barres de défilement (il n'en mettra que si c'est nécessaire). C'est la valeur que je conseille d'utiliser le plus souvent.
Centrer des blocs
Il est tout à fait possible de centrer des blocs. C'est même très pratique pour réaliser un design centré quand on ne connaît pas la résolution du visiteur.
Pour centrer, il faut respecter les règles suivantes :
•	donnez une largeur au bloc (avec la propriétéwidth) ;
•	indiquez que vous voulez des marges extérieures automatiques, comme ceci :margin: auto;.
COUPER LES TEXTES TROP LARGES
L'ordinateur ne sait pas « couper » l'adresse car il n'y a ni espace, ni tiret. Il ne sait pas faire la césure.
Avec le code suivant, la césure sera forcée dès que le texte risque de dépasser (figure suivante).
p
{
    word-wrap: break-word;
}
résumé
•	On distingue deux principaux types de balises en HTML :
o	Le type block (<p>,<h1>…) : ces balises créent un retour à la ligne et occupent par défaut toute la largeur disponible. Elles se suivent de haut en bas.
o	Le type inline (<a>,<strong>…) : ces balises délimitent du texte au milieu d'une ligne. Elles se suivent de gauche à droite.
•	On peut modifier la taille d'une balise de type block avec les propriétés CSSwidth(largeur) etheight(hauteur).
•	On peut définir des minima et maxima autorisés pour la largeur et la hauteur :min-width,max-width,min-height,max-height.
•	Les éléments de la page disposent chacun de marges intérieures (padding) et extérieures (margin).
•	S'il y a trop de texte à l'intérieur d'un bloc de dimensions fixes, il y a un risque de débordement. Dans ce cas, il peut être judicieux de rajouter des barres de défilement avec la propriétéoverflowou de forcer la césure avecword-wrap.
FLEXBOX
En résumé
•	Il existe plusieurs techniques pour positionner les blocs sur la page. Flexbox est la technique la plus récente et de loin la plus puissante, que je vous recommande d'utiliser.
•	Le principe de Flexbox est d'avoir un conteneur, avec plusieurs éléments à l'intérieur. Avecdisplay: flex; sur le conteneur, les éléments à l'intérieur sont agencés en mode Flexbox (horizontalement par défaut).
•	Flexbox peut gérer toutes les directions. Avecflex-direction, on peut indiquer si les éléments sont agencés horizontalement (par  défaut) ou verticalement. Cela définit ce qu'on appelle l'axe principal.
•	L'alignement des éléments se fait sur l'axe principal avecjustify-content , et sur l'axe secondaire avecalign-items.
•	Avecflex-wrap, on peut autoriser les éléments à revenir à la ligne s'ils n'ont plus d'espace.
•	S'il y a plusieurs lignes, on peut indiquer comment les lignes doivent se répartir entre elles avecalign-content. 
•	Chaque élément peut être réagencé en CSS avecorder (pas besoin de toucher au code HTML !).
.element:nth-child(1)
{
    order: 3;
}
.element:nth-child(2)
{
    order: 1;
}
.element:nth-child(3)
{
    order: 2;
}
	
	
•	Avec la super-propriétéflex, on peut autoriser nos éléments à occuper plus ou moins d'espace restant.
	
AUTRES TECH DE MISE EN PAGE :
•	La technique de mise en page la plus récente et la plus puissante est Flexbox. C'est celle que vous devriez utiliser si vous en avez la possibilité.
•	D'autres techniques de mise en page restent utilisées, notamment sur des sites plus anciens : le positionnement flottant et le positionnementinline-block . Il est conseillé de les connaître.
•	Le positionnement flottant (avec la propriétéfloat) est l'un des plus utilisés à l'heure actuelle. Il permet par exemple de placer un menu à gauche ou à droite de la page. Néanmoins, cette propriété n'a pas été initialement conçue pour cela et il est préférable, si possible, d'éviter cette technique.
•	Le positionnementinline-blockconsiste à affecter un typeinline-blockà nos éléments grâce à la propriétédisplay. Ils se comporteront comme des inlines (placement de gauche à droite) mais pourront être redimensionnés comme des blocs (avecwidthetheight). Cette technique est à préférer au positionnement flottant.
•	Le positionnement absolu permet de placer un élément où l'on souhaite sur la page, au pixel près.
•	Le positionnement fixe est identique au positionnement absolu mais l'élément restera toujours visible même si on descend plus bas dans la page.
•	Le positionnement relatif permet de décaler un bloc par rapport à sa position normale.
•	Un élément A positionné en absolu à l'intérieur d'un autre élément B (lui-même positionné en absolu, fixe ou relatif) se positionnera par rapport à l'élément B, et non par rapport au coin en haut à gauche de la page.

https://codepen.io/anon/pen/yvweJa
https://www.webpagefx.com/web-design/color-picker/



