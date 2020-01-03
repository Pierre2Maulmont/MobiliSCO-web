# PHP

## Démarrage

<?php        ?>
- Commentaires :
Monoligne : //    //
Multiligne : */    /*

## Variables
La variable commence par dollar, ne contient pas d'espaces (utiliser_) et se termine par point-virgule

Les types d'information stockée : string, int, float, boolean
L'instruction echo affiche la valeur

Texte entre guillemets simples ou doubles. Penser à "échapper" avec un antislash, si le texte contient aussi un guillemet : 'je m\'appelle...'
$prix = 2.5; // La décimale est un point, dans PHP
$quantité = 2;
$total = $prix * $quantité;

Concaténation : le point sépare les éléments concaténés
echo 'cela coûte' . $total . ' euros.';

Le modulo % récupère le reste.

La variable peut prendre la valeur NULL

## Conditions

- Symboles
Attention au symbole = qui assigne une valeur. Si on veut tester une égalité dans une condition, on double le signe ==
!= Est différent de

- SI, SINON SI, SINON
if ($Age_du_visiteur <= 12)
{
    echo 'Salut, gamin';
}
elseif ($Age_du_visiteur == 14)
{
    echo 'Tu as 14 ans";
}
else
{
    echo 'Bonjour Monsieur';
}

- Pas besoin d'écrire le test dans la condition portant sur un booléen :
<?php
$adulte = true;
if ($adulte)
echo 'tu peux rester';
?>

- On peut inverser : condition teste si ce n'est pas un adulte
if(!$adulte)

- AND &&, OR || dans la condition :
<?php
$adulte = true;
$nom = 'Bernard';
if ($adulte AND $nom = 'Bernard')

- On peut couper en deux du code PHP dans les accolades, pour écrire directement en html, sans instruction echo
<?php
$adulte = true;
if ($adulte)
{
?>
<p>Tu es adulte</p>
<?php
}
?>

- Condition CASE pour tester la même variable :
<?php
$age = 18;
switch($age)
{
    case 4:
        echo 'tu as 4 ans';
        break;
    case 12:
        echo 'tu as 12 ans';
        break;
    default:
        echo 'désolé : jsais pas !';
?>

default est un peu l'équivalent du else : dans tous les autres cas ...

- Puissant : passer une valeur à une autre variable, dans l'accolade de la condition.
if ($age=12)
{
    $autorisation_entrée = true;
}

- Les ternaires : des conditions condensées
<?php
$age = 24;
$majeur = ($age >= 18) ? true : false;
?>

- Test de la variable nulle
if ($variable == NULL) ...
