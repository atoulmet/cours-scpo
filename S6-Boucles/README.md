# Les boucles

L'informatique vise à automatiser des actions. Nous avons donc régulièrement besoin de répéter la même action sur une série d'éléments.

Par exemple, comment calculer les résultats académiques sur l'ensemble des étudiants ? Ou envoyer un email individuels à chaque étudiant, etc.

Dans ce cas, l'approche consiste généralement à :

- définir une fonction qui permettra de traiter l'opération seule (par exemple "calculer les résultats d'un étudiant") ;
- répéter autant de fois que nécessaire l'appel à cette fonction, sur l'ensemble des éléments à traiter (ici, l'ensemble des étudiants).
Pour réaliser ces "répétitions", on utilise ce que l'on appelle des ✨ boucles ✨.


## Les instructions `while` et `for...of`

`while` permet d'exécuter une instruction tant qu'une condition donnée est vérifiée. On peut tout simplement se la représenter mentalement en se disant "Tant que ... Alors mon code doit effectuer....". Elle s'utilise de la façon suivante :

```
while (condition)
  quoi faire

```

Si la condition n'est pas vérifiée, l'instruction `quoi faire` n'est pas exécutée et le contrôle passe directement à la suite du code.

Voilà concrètement en JS à quoi ça correspond :
```
let index = 0

while (index < 5) {
    console.log("Bonjour !")
    iterator = iterator + 1
}
```

Ici, on aurait pu faire 
```
console.log("Bonjour !")
console.log("Bonjour !")
console.log("Bonjour !")
console.log("Bonjour !")
console.log("Bonjour !")
```

Mais c'est quand même plus logique d'utiliser les boucles, non ?

> Exercice 1 : manipulation basique de while

Précision : il est totalement possible d'imbriquer les instructions entre elles. Donc on peut retrouver des if dans des while.


## Les boucles infinies
D'ailleurs, vous pouvez tomber dans ce qui s'appelle des boucles infinies. Ça arrive lorsque vous ne prévoyez rien pour sortir de votre boucle. Dans ces cas, gare aux crashs de votre ordinateur.

Un exemple de boucle infinie 👇
```
while (42) {
    console.log("Nous voilà pris dans une boucle infinie 🤯")
}
```

> Exercice 2 : Découvrez une boucle infinie

## Parcourez un tableau

Comme on l'avait déjà vu, la logique de boucles va nous permettre de parcourir les tableaux.
Essayez pour voir. On fait 
```
let index = 0
const capitalCities = ["Paris", "Londres", "Madrid", "Lisbonne", "Berlin", "Bruxelles"]

while (index < capitalCities.length) {
    console.log(capitalCities[index])
    index = index + 1
}
```

> Exercice 3 : parcourir un tableau avec while

## L'instruction for...of

Comme nous allons le voir, il existe plusieurs instructions permettant d'effectuer des boucles. Nous n'allons pas toutes les voir ici ([vous pouvez en découvrir davantage dans la doc](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Loops_and_iteration)), mais maintenant que vous avez vu `while` qui est un peu la base de la programmation, nous allons maintenant apprendre à utiliser `for...of` qui nous simplifie la vie. 🎉

`for...of` va tout simplement nous permettre de parcourir tous les éléments d'un tableau, sans avoir à se soucier de l'index, de la longueur, etc.

Essayez pour voir. On fait 
```
const capitalCities = ["Paris", "Londres", "Madrid", "Lisbonne", "Berlin", "Bruxelles"]
for (city of capitalCities) {
    console.log(city)
}
```

...vous permettra d'afficher le contenu de votre tableau.

> Exercice 4 : parcourir un tableau avec for...of

## Parcourez une chaîne de caractères

Une chaîne de caractères est composée... de caractères. Comme un tableau est composé d'éléments. Ce qui veut dire que vous pouvez accéder à chacune des lettres de votre chaîne de caractères de la même manière, en faisant 
```
"CECI EST MA CHAÎNE DE CARACTÈRES"[8] // Vous retournera M
```

ou bien en faisant 
```
const name = "Richard" 
console.log(name[3]) // vous aurez alors h dans la console
```

> Exercice BONUS à faire ensembles : Convertir en morse

### Pour la suite

Nous avons maintenant vu les bases de la logique du code que je voulais vous montrer. Pour la semaine suivante, vous devez finir les exercices de la séance 6, et vous assurer que vous êtes capables de reproduire seul·e ce que nous avons fait durant les séances précédentes.

### Allez plus loin

Si vous souhaitez aller plus loin, je vous conseille de vous pencher sur les méthodes des tableaux qui vous permettront d'itérer sur chaque élément de votre tableau. Par exemple en faisant les exercices de [Functional Programming de freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures#functional-programming). Attention, nous ne verrons pas ces exercices en cours.