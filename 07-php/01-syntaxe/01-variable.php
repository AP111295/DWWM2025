<h1>Introduction</h1>
<hr>
<!--
PHP code is placed between these tags:
<?php ?>
Any code outside of these tags is plain HTML.
It's common to see PHP in the middle of HTML.
But depending on the structure chosen, you can separate the majority of the PHP from the HTML.
(For example, MVC structure)
-->
<?php 
// Single-line comment
# another single-line comment
/*
Multi-line comment
*/
// ! Each PHP instruction ends with a ";"
// By default, the PHP code is not visible on the page. To display it, you must use one of the following instructions:

echo "Coucou";
// While most PHP functions require parentheses, some, like "echo," do not.
# echo can take multiple parameters:
echo "Hello", "World";
# Once displayed, the data is treated as HTML:
echo "<br> PHP !!! <hr>";
/* 
    There are other options for displaying data, for example,
    "print," which returns a value of 1 and is a little slower to execute.
*/
print "<br> test avec print <br> ";
/* 
   There are many others, but the second most commonly used is var_dump().
It will display any type of data, specifying its type beforehand. It is widely used for debugging.
*/
var_dump("Bonjour", "le monde");
// Allows you to view the entire PHP configuration:
// phpinfo();
# You can retrieve environment variables with getenv()
echo getenv("DB_HOST");

#------------------------------------
echo "<h1>Déclaration des variables</h1><hr>";
//  PHP variables always begin with a "$"
// You can then name them however you like, but they must not begin with a number
$banane;
// echo $banane;
// When a warning occurs, the error message is displayed, but the code continues
echo "<br><strong>après warning</strong>";
// throw new ErrorException("test");
// In the event of a fatal error, the code stops
echo "<br><strong>après fatal Error</strong>";

$banane = "Jaune";
echo "<br>banane :", $banane;
/* 
There are two ways to declare constants:
Previously "define('name', 'value')"
Or, newer, "const name = value;"
*/
define("AVOCAT", "vert");
const AVOCATS = "verreux";

echo "<br>Un avocat est ", AVOCAT, " ou ", AVOCATS, "?<hr>";

// Retrieves an array of defined variables
// var_dump(get_defined_vars());
// Same for constants
// var_dump(get_defined_constants());

// dynamic variable:
$chaussette = "rouge";
//sock is a variable that has the value "rouge"
$$chaussette = "bleu";
//I put the value "blue" into a variable whose name depends on the contents of the variable "chaussette"

echo $rouge;

unset($banane);
// var_dump(get_defined_vars());
//-------------------------------------------------------
echo "<h2>Types de Variables</h2><hr>";
$num = 5;
$dec = 0.5;
$str = "Coucou";
$arr = [];
$boo = true;
$nul = NULL;
$obj = (object)[];

echo "num est de type : ", gettype($num), "<br>";
echo "dec est de type : ", gettype($dec), "<br>";
echo "str est de type : ", gettype($str), "<br>";
echo "arr est de type : ", gettype($arr), "<br>";
echo "boo est de type : ", gettype($boo), "<br>";
echo "nul est de type : ", gettype($nul), "<br>";
echo "obj est de type : ", gettype($obj), "<br>";
// ---------------------------------------------------------
echo "<h2>Les strings</h2><hr>";

// pour déclarer un string, on utilisera "" ou ''
echo "un string", 'Ou un autre<br>';
echo "On peut tout à fait
faire des sauts à la ligne
dans un string php.<br>";

$nom = "Maurice";
$age = 54;

// L'interpolation ne fonctionne qu'avec les "".
echo "$nom a $age ans. <br>";
echo '$nom a $age ans. <br>';
// La concaténation se fait avec un "."
echo $nom . " a " . $age . " ans. <br>";
$nom .= " Dupont"; // équivalent à $nom = $nom . " Dupont";
echo $nom, "<br>";
// Affiche la longueur du string
echo strlen($nom), "<br>";

// Le fonctionnement des string php se rapprochent de celui des tableaux
echo $nom[8], "<br>";
$nom[8] = "L";
echo $nom, "<br>";
// ---------------------------------------------------
echo "<h2>Les nombres</h2><hr>";

echo "1+1=", 1+1, "<br>";
echo "1-1=", 1-1, "<br>";
echo "2*2=", 2*2, "<br>";
echo "8/2=", 8/2, "<br>";
// Le modulo, reste de la division
echo "11%3=", 11%3, "<br>";
// La puissance
echo "2**4=", 2**4, "<br>";

$x = 5;
$x += 2; // $x = $x + 2;
$x -= 3;
$x *= 4;
$x /= 2;
$x %= 3;
$x **= 2;
echo "x vaut $x <br>";

echo $x++ , "-->", $x, "<br>";
echo ++$x , "-->", $x, "<br>";
echo $x-- , "-->", $x, "<br>";
echo --$x , "-->", $x, "<br>";

echo PHP_INT_MAX, "<br>", PHP_INT_MIN, "<br>";
echo PHP_FLOAT_MAX, "<br>", PHP_FLOAT_MIN, "<br>";

// On peut convertir une valeur en la faisant précédé de (type) :
echo (int)"42 trucs", "<br>", (int)3.14, "<br>";
// ---------------------------------------------------
echo "<h2>Les Tableaux</h2><hr>";

// Déclaration originelle :
$a = array("banane", "pizza", "avocat");
// Déclaration récente :
$b = ["banane", "pizza", "avocat"];

var_dump($a);
// affichage plus jolie :
echo '<pre>'.print_r($a, 1).'</pre>';

// sélection d'un élément du tableau :
echo "J'aime la $a[0], la $a[1] et l'$a[2].<br>";

// retourne la taille du tableau :
echo count($a), "<br>";

// Ajouter un élément au tableau :
$b[] = "fraise";
var_dump($b);
echo "<hr>";

// En PHP il existe une autre forme de tableau, les tableaux associatifs.
// Ces tableaux remplaçent les index par des clef nominative.

$person = ["prenom"=>"Maurice", "age"=>52];
echo $person["prenom"] . " a " . $person["age"] . " ans.<br>";
// Pour ajouter un élément, j'indique la nouvelle clef :
$person["loisir"] = ["pétanque", "bowling"];
echo '<pre>'.print_r($person, 1).'</pre>';

echo $person["loisir"][1], "<br>";
// Supprimer un élément du tableau :
unset($person["age"]);
echo '<pre>'.print_r($person, 1).'</pre>';

// Unset posera problème sur un tableau classique :
unset($a[1]);
// l'index 1 n'existe plus
var_dump($a);
// Corrigeons cela avec :
$a = array_values($a);
var_dump($a);
echo "<br>";

// Sinon on pourra supprimer un index avec :
array_splice($b, 1, 1);
var_dump($b);
echo "<br>";

sort($b);
var_dump($b);
echo "<br>";
/* 
    rsort() pour trier dans le sens décroissant;
    Et pour les tableaux associatif :

        asort() ordre croissant des valeurs
        ksort() ordre croissant des clefs
        arsort() ordre décroissant des valeurs
        krsort() ordre décroissant des clefs
*/
// ---------------------------------------------------
echo "<h2>Les Booleans</h2><hr>";
$f = false;
$t = true;
var_dump($f, $t);

echo "<br> 5 < 3 :";
var_dump(5<3);

echo "<br> 5 > 3 :";
var_dump(5>3);

echo "<br> 5 <= 3 :";
var_dump(5<=3);

echo "<br> 5 >= 3 :";
var_dump(5>=3);

echo "<br> 5 == '5' :";
var_dump(5=='5');

echo "<br> 5 === '5' :";
var_dump(5==='5');

echo "<br> 5 != '5' :";
var_dump(5 != '5');
// Autre notation pour "différent"
echo "<br> 5 <> '5' :";
var_dump(5 <> '5');

echo "<br> 5 !== '5' :";
var_dump(5 !== '5');

// On peut évidement les combiner :
echo "<br> 5 < 3 and 5<2 :";
var_dump(5 < 3 and 5<2);
// OU :
var_dump(5 < 3 && 5<2);

echo "<br> 5 < 3 or 5<2 :";
var_dump(5 < 3 or 5<2);
// OU :
var_dump(5 < 3 || 5<2);

// true si seulement un des deux est true.
echo "<br> 5 < 3 xor 5<2 :";
var_dump(5 < 3 xor 5<2);

echo "<br>";
var_dump(!$f, !$t);

// ---------------------------------------------------
echo "<h2>Les variables Super Globals.</h2><hr>";

/* 
    Les variables super globals, sont des variables définie par défaut par PHP, et qui sont accessible n'importe où dans le code.

    $GLOBALS
    est un tableau contenant toute les variables globales (celles de PHP et les votres)

    $_SERVER
    Contient les informations liées au serveur, le header, l'url et j'en passe.

    $_REQUEST
    Regroupe le contenu des superglobals $_POST, $_GET et $_COOKIE.

    $_COOKIE
    Liste des cookies.

    $_GET
    Liste de toute les informations envoyées en GET (dans l'url)

    $_POST
    Liste de toute les informations envoyées en POST

    $_FILES
    Contient les informations des fichiers envoyés par un formulaire.

    $_ENV
    Contient toute les variables d'environnement définies.

    $_SESSION
    Doit être initialisé avant d'être utilisé.
    Contient toute les informations stockées en session.
*/
echo '<pre>'.print_r($_POST, 1).'</pre>';
?>