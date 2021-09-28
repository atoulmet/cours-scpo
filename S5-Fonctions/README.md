# Les fonctions

Nous nous attaquons cette semaine à une des dernières briques fondamentales de la progammation : les fonctions. ✨

Les fonctions vont nous permettre d'embarquer un bout de logique et de l'utiliser autant de fois que nécessaire, sans avoir à le réécrire (souvenez-vous : la base du développement est la fainéantise 😉).
Elles nous permettent de récupérer une valeur qu'elle calcule pour nous, ou d'effectuer une tâche.

Un exemple simple pourrait être la création d'un programme destiné à envoyer un message à trois nouveaux élèves de Sciences Po : Sarah, Etienne, et Anouk.

Le code pourrait être le suivant :
```
console.log("Bonjour Sarah, bienvenue à Sciences Po !")
console.log("Bonjour Etienne, bienvenue à Sciences Po !")
console.log("Bonjour Anouk, bienvenue à Sciences Po !")
```

Supposons maintenant que la direction de la communication souhaite un jour changer le message d'accueil, et le remplacer par bienvenue à l'IEP de Paris !. L'équipe informatique devrait alors modifier 3 fois le texte saisi : une fois pour Sarah, une fois pour Etienne, et une fois pour Anouk. Or l'informatique vise à éviter toute action répétitive. Il y a donc plus simple.

Pour cela, nous allons créer une fonction, c'est-à-dire une sorte de procédure ou de routine.

## Découvrez la syntaxe

Alors, autant vous montrer à quoi ressemble la déclaration d'une fonction dès maintenant :
```
function maFonction(paramètre1, paramètre2, ...) {
    // faire quelque chose
}
```

Les paramètres vont permettre de la configurer comme on le souhaite. Ici, on a passé 2 paramètres, mais il aurait pu y en avoir 0, 1, 3, etc. selon les besoins.

Et derrière, on utilise notre fonction en faisant :
```
maFonction(paramètre1, paramètre2)
```

Pour simplifier, nous pouvons imaginer une fonction comme une usine de production automobile pouvant produire des véhicules Peugeot et Renault, de couleur bleue ou noire. L'utilisateur disposerait alors d'un panneau de contrôle, avec un levier "marque" pour choisir Peugeot ou Renault, et un levier "couleur" pour choisir "bleue" ou "noire".

Dans ce cas, cette usine représente une fonction produireVehicule qui prend 2 paramètres : marque et couleur, et qui pourrait ressembler à cela :

```
function produireVehicule(marque, couleur) {
    console.log("Véhicule produit de la marque " + marque + " et de couleur " + couleur +".")
}

produireVehicule("peugeot", "bleue") // Affiche : Véhicule produit de la marque peugeot et de couleur bleue.
produireVehicule("peugeot", "noire") // Affiche : Véhicule produit de la marque peugeot et de couleur noire.
produireVehicule("renault", "bleue") // Affiche : Véhicule produit de la marque renault et de couleur bleue.
produireVehicule("renault", "noire") // Affiche : Véhicule produit de la marque renault et de couleur noire.
```
Si l'on reprend le code saisi plus haut sur l'accueil d'étudiants, nous pouvons écrire sous forme de fonction :

```
function accueillirEtudiant(prenom) {
    console.log("Bonjour " + prenom + ", bienvenue à Sciences Po !")
}

accueillirEtudiant("Sarah") # Affiche : Bonjour Sarah, bienvenue à Sciences Po !
accueillirEtudiant("Etienne") # Affiche : Bonjour Etienne, bienvenue à Sciences Po !
accueillirEtudiant("Anouk") # Affiche : Bonjour Anouk, bienvenue à Sciences Po !
```

Et dans le cas où la direction de la communication souhaiterait changer de message, une seule modification suffit pour impacter l'ensemble du projet :

```
function accueillirEtudiant(prenom) {
    // Remplacement de Sciences Po par IEP de Paris dans le texte
    console.log("Bonjour " + prenom + ", bienvenue à l'IEP de Paris  !")
}
```

accueillirEtudiant("Sarah") # Affiche : Bonjour Sarah, bienvenue à l'IEP de Paris !
accueillirEtudiant("Etienne") # Affiche : Bonjour Etienne, bienvenue à l'IEP de Paris !
accueillirEtudiant("Anouk") # Affiche : Bonjour Anouk, bienvenue à l'IEP de Paris !


## Les paramètres
Il n'est pas nécessaire d'avoir des paramètres dans une fonction. Mais même sans paramètre, vous devez toujours utiliser les parenthèses, elles seront simplement vides, comme ceci : 
```
function appelerMaFonction() {
    // faire quelque chose
}

appelerMaFonction()
```

## Créez votre fonction

Pour bien rédiger une fonction dans un programme, il faut réussir à comprendre toutes les actions "communes" du programme, qui restent les mêmes et identifier les éléments "variables", qui vont donc changer.

Dans le cas de l'accueil des étudiants montré plus haut, l'action commune est l'affichage d'un texte contenant un prénom, au format Bonjour PRENOM, bienvenue à l'IEP de Paris.

Les actions "communes" de la fonction doivent alors constituer le corps de celle-ci, tandis que les éléments "variables" seront passés comme paramètres.

> Exercices 1 et 2

## Le mot clé return

Imaginons que l'on a les deux fonctions suivantes :
```
function ajouter(a, b) {
    console.log(a+b)
}
```

```
function foisDeux(n) {
    console.log(2*n)
}
```

Ces deux fonctions permettent de lancer les commandes suivantes :
```
ajouter(2, 3) // affiche : 5
foisDeux(5) // affiche : 10
```
Or, en informatique, il est souvent utile d'enchaîner des fonctions, par exemple on aimerait pouvoir écrire :

```
foisDeux(ajouter(2, 3))
```

En l'état de nos connaissances, ce n'est pas possible : l'exécution de ce code va nous faire des `console.log` qui n'ont aucun sens

En effet, ici, `ajouter(2, 3)` affiche 5 à l'écran, mais ne donne aucun résultat.

```
const resultat = ajouter(2, 3)
console.log("Résultat vaut :", resultat) // resultat est undefined (vous avez vu ce que ça veut dire)
```

C'est normal : notre fonction ne `retourne` aucune valeur.

Pour pouvoir "passer" le résultat produit par une fonction et le stocker ou le réutiliser, on doit utiliser le mot-clé "return".

```
function ajouter(a, b) {
    return (a+b)
}
```

```
function foisDeux(n) {
    return (2*n)
}
```
Si l'on écrit le code de la sorte, l'exécution suivante n'affichera rien :

ajouter(2, 3) // n'affiche rien
foisDeux(5) // n'affiche rien
En revanche, on peut maintenant enchaîner les fonctions et stocker leur résultat :

```
const operation = ajouter(2, 3)
console.log("Résultat vaut :", operation) //affiche 5 
```

On peut même enchaîner les fonctions, et demander à afficher la valeur produite par cet enchaînement, en utilisant `console.log` sur le résultat de la fonction :

```
foisDeux(ajouter(2, 3)) // n'affiche rien
console.log(foisDeux(ajouter(2, 3))) // affiche 10 (notez la présence du console.log)
 ```
Pour résumer : le mot-clé `console.log` sert à afficher un élément à l'écran, mais ne permet pas de ré-exploiter cet élément.

Pour ré-exploiter des valeurs issues d'une fonction, on utilisera plutôt le mot-clé return.

A partir de maintenant, nous ferons surtout des fonctions dont la fin se terminera par "return", et appellerons puts sur le résultat de la fonction.

# Pas recommandé :
```
function fonction(p1, p2) {
    # ... actions ...
    console.log(resultat)
}

fonction(1, 2)
```

# Recommandé :
```
function fonction(p1, p2) {
    # ... actions ...
    return res
}

const resultat = fonction(1, 2)
console.log(resultat)
```

⚠️ Il n'est possible de faire qu'un seul return dans une fonction.

### Hé ça vous dit quelque chose ?

Vous en avez utilisé depuis le début avec `console.log`. D'ailleurs, ✨✨✨ console.log peut prendre plusieurs arguments : la fonction `console.log` affichera les éléments que vous lui passez séparés par une virgule les uns à la suite des autres.

De la même manière, les méthodes que vous avez utilisées jusqu'à maintenant sont aussi des fonctions : il s'agit d'une fonction étant une propriété d'un objet.

Essayez de déclarer un objet `person` qui a une propriété qui s'appelle `sayHi` dont la valeur est une fonction qui fait un `console.log`.
```
const person = {
    sayHi: function() {
        console.log("hi")
    }
}
```

Vous l'utilisez ensuite en faisant 
```
person.sayHi()
```