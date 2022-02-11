# Allez plus loin dans les types

## Récapitulatif des types

Pour l'instant vous avez surtout vu deux types : les strings et les numbers. Mais il en existe d'autres. Je vous mets la syntaxe juste ici des types les plus importants en JS :
```
let number = 42
let string = "Voilà ma chaîne de caractères"
let booléen = true
undefined
null
let objet = {
    "maClé1": "ma Valeur1",
    "maClé2": "ma Valeur2"
}
let tableau = ["valeur1", "valeur2", "valeur3"]
```


## Découvrez les objets

Je vous les avais rapidement montrés durant la séance précédente : les objets. Vous trouverez [la documentation juste ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_Objects).

On peut penser aux objets JS un peu comme un objet de la vraie vie. Chaque objet possède des propriétés, comme si on définissait ses caractéristiques. Par exemple, si je crée un objet "livre", il aura les propriétés "titre", "auteur", "chapitres", "éditeur", etc.

On pourra alors accéder à une propriété en faisant 
`nomObjet.nomPropriete`, ce qui nous donnerait pour un objet livre : `livre.titre`.

Pour le livre Harry Potter par exemple, on a  :
```
const livre = {
    "titre": "Harry Potter à l'école des sorciers",
    "auteur": "J.K. Rowling",
    "chapitres": 17,
    "editeur": "Folio"
}
```
On accède alors à l'auteur en faisant `livre.auteur`. 

> Exercice 1

Vous voyez que les propriétés peuvent être des strings, des numbers, ça peut également être des booléens, des tableaux, etc. 

> Exercice 2

Les objets sont particulièrement utiles pour gérer les données. 

> Démo des données Facebook


> Exercice 3


## Maniez les tableaux (arrays)

Je voudrais maintenant vous parler d'un cas un peu particulier : les tableaux. Concrètement, c'est comme un objet, mais avec une position, comme une liste d'éléments, avec 
```
{
    0: "élément1",
    1: "élément2",
    2: "élément3",
    3: "élément4",
    4: "élément5",
}
```

Mais au lieu de le noter comme je viens de vous le montrer, on a une syntaxe spécifique avec les crochets `[]`. Ça ressemble à ça : 
```
const locations = [
        '56 rue des Saint Pères', 
        '9 rue de la chaise', 
        '13 rue de l'Université', 
        '27 rue Saint Guillaume'
    ]
```

### Comprenez l'importance des index

Dans mon exemple, vous avez vu que les clés de notre tableau étaient des nombres de 0 à 4. Il s'agit en fait de ce qu'on appelle les index.

Dans un tableau, (mais aussi dans une string) la position d'un élément correspond à son index dans le tableau. Souvenez-vous que pour les index, on compte toujours à partir de 0 !

Ainsi, pour mon tableau 
```
const elements = [   ,
    "élément1",
    "élément2",
    "élément3",
    "élément4",
    "élément5"
]
```

si je veux obtenir uniquement élément2, je fais `elements[1]`. Alors, attention à bien compter à partir de 0 !

> exercice 4

### Comprenez .length

> exercice 5

### Manipulez les tableaux
Jusqu'à maintenant, on a fait des tableaux de strings. De la même manière, on peut faire des tableaux de strings, de numbers, d'objets, etc.
Si je reprends l'exemple du livre Harry Potter, je pourrais faire un array de livres :
```
const books = [
    {
        "titre": "Harry Potter à l'école des sorciers",
        "auteur": "J.K. Rowling",
        "chapitres": 17
    },
    {
        "titre": "Harry Potter et la chambre des secrets",
        "auteur": "J.K. Rowling",
        "chapitres": 18
    },
    {
        "titre": "Harry Potter et la chambre des secrets",
        "auteur": "J.K. Rowling",
        "chapitres": 22
    },
    {
        "titre": "Harry Potter et la coupe de Feu",
        "auteur": "J.K. Rowling",
        "chapitres": 37
    }
]
```

Et donc, si on souhaite accéder à un élément particulier, on peut utiliser l'index (sa position dans la liste). Souvenez-vous, on compte à partir de zéro. Si on veut le 3e élément, on peut donc faire 
```
const secondElement = books[2]
console.log(secondElement)
```
On a donc :
```
{
    "titre": "Harry Potter et la chambre des secrets",
    "auteur": "J.K. Rowling",
    "chapitres": 22
}
```

> Exercice pratique : faire tableau pour les trois films Seigneur des Anneaux => tableau d'objets qui contiennent eux mêmes tableaux et objets, avec propriétés : titre, personnages, etc.


### Un exemple de méthode associée à un tableau

On a un tableau 
```
const cities = ['Paris', 'Sydney', 'Taipei', 'New York', 'Cape Town']
```

Si on veut savoir si notre tableau contient la ville Taipei, on peut faire : 
```
console.log(cities.includes('Taipei'))
// true
```

En revanche, si on fait 
```
console.log(cities.includes('London'))
// false
```

> Pourquoi utiliser des méthodes qui modifient les valeurs ?

### Cherchez s'il existe une méthode

Alors comment faire pour savoir s'il existe une méthode toute faite pour ses besoins ? Et bien pour ça, il n'y a pas de miracle : il faut chercher dans la documentation. Typiquement, vous pouvez directement chercher sur [la doc mozilla](https://developer.mozilla.org/), mais à moins de savoir exactement le nom de sa méthode, le plus efficace reste de faire une recherche Google. Et comme toujours, à force de pratiquer, cela finit par rentrer. Mais même les développeurs professionnels recherchent régulièrement sur Google comment utiliser une méthode en particulier.

<summary>Allez plus loin, avec les objets natifs en JS</summary>

<details>
Nous avons vu les objets, et que des méthodes leurs sont attachées. Mais j'aimerais vous parler d'objets un peu spécifiques : les objets globaux. JS nous y donne accès. Ils nous permettent d'accéder à des méthodes spécifiques, directement dans n'importe quel fichier JS.

### Objet Math 

Commençons avec l'[objet Math](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math), qui vous permet d'accéder à des méthodes mathématiques. On a notamment accès à des fonctions qui permettent d'obtenir des racines carrées, des arrondis, des exponentielles, etc.

Par exemple, pour obtenir un nombre aléatoire entre 0 et 1, vous faites :
```
const random = Math.random()
```

À vous de voir ce que vous obtenez !

> Exemple pour obtenir nombre random entre 0 et 10 => [exercice 4](https://replit.com/@scpo-fall-2021/S3-typesandmethods-exercice-4#index.js)

### Objet Date

L'objet Date est très utile.

Essayez de faire `Date()` pour voir. Vous aurez alors une string qui correspond à la date de l'instant présent où cela a été exécuté.

Mais en interne, JS utilise ce qu'on appelle un timestamp.

Essayez de faire `Date.now()`.
Qu'est-ce que ça vous renvoie ?

Un grand nombre qui a l'air un peu pris au hasard.

Mais détrompez-vous, ce n'est pas du tout dû au hasard : il s'agit en fait du nombre de millisecondes écoulées depuis le premier janvier 1970, minuit UTC. Il s'agit d'une date de référence utilisée dans d'autres langages parce que des nombres sont plus faciles à manipuler en informatique, notamment pour comparer des dates, que des ojets.

Pour manipuler les dates en JS, notamment pour les afficher en français, je vous conseille de [suivre ce petit tuto](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/objet-date/).

### Pour la semaine prochaine

Encore une fois, à vous de jouer !

</details>

