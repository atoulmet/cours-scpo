# Allez plus loin dans les types

## Récapitulatif des types

Pour l'instant vous avez vu deux types : les strings et les numbers. Mais il en existe d'autres. Je vous mets la syntaxe juste ici des types les plus importants en JS :
```
let number = 42
let string = "Voilà ma chaîne de caractères"
let booléen = true
let objet = {
    "maClé1": "ma Valeur1",
    "maClé2": "ma Valeur2"
}
let tableau = ["valeur1", "valeur2", "valeur3"]
```

## Découvrez les objets

Je vous les avais montrés durant la séance précédente : les objets. Vous trouverez [la documentation juste ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_Objects).

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
Vous voyez que les propriétés peuvent être des strings, des numbers, ça peut également être des booléens, des tableaux, etc. 
On accède alors à l'auteur en faisant `livre.auteur`. 

> Une autre syntaxe possible : `livre["auteur"]`.

Les objets sont particulièrement utiles pour gérer les données.

> Exercice pour créer objet `gameOfThronesCharacter` (on passe en 🇬🇧).


## Maniez les tableaux (arrays)

Je voudrais maintenant vous parler d'un cas un peu particulier : les tableaux. Concrètement, c'est comme un objet, mais avec une position, comme une liste d'éléments, avec 
```
{
    1: "élément1",
    2: "élément2",
    3: "élément3",
    4: "élément4",
    5: "élément5",
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

De la même manière, on peut faire des tableaux de strings, de numbers, d'objets, etc.
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

De la même manière, si on souhaite accéder à un élément particulier, on peut utiliser l'index (sa position dans la liste). Souvenez-vous, on compte à partir de zéro. Si on veut le 3e élément, on peut donc faire 
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

## Découvrez les objets natifs en JS

Nous avons vu les objets, et que des méthodes leurs sont attachées. Mais j'aimerais vous parler d'objets un peu spécifiques : les objets globaux. Ils nous permettent d'accéder à des méthodes spécifiques, directement dans n'importe quel fichier JS.

Vous avez par exemple l'objet Math, qui vous permet d'accéder à des méthodes mathématiques.
Par exemple, pour obtenir un nombre aléatoire entre 0 et 1, vous faites :
```
const random = Math.random()
```

À vous de voir ce que vous obtenez !

> Exemple pour obtenir nombre random entre 0 et 10

### Pour la semaine prochaine

Encore une fois, à vous de jouer !
- [Exercice 1](https://replit.com/@scpo-fall-2021/S3-typesandmethods-exercice-1#index.js)
- [Exercice 2](https://replit.com/@scpo-fall-2021/S3-typesandmethodsexercice-2#index.js)
- [Exercice 3](https://replit.com/@scpo-fall-2021/S3-typesandmethods-exercice-3)
- [Exercice 4](https://replit.com/@scpo-fall-2021/S3-typesandmethods-exercice-4#index.js)
- [Exercice 5](https://replit.com/@scpo-fall-2021/S3-typesandmethods-exercice-5#index.js)