# Transformez vos valeurs avec les méthodes

La semaine dernière, nous avions vu les strings et les numbers pour manipuler du texte et des nombres.
Il s'agit des valeurs primitives qu'accepte JavaScript. 

> Si vous voulez en apprendre davantage sur les types, n'hésitez pas à jeter un oeil au document "types-de-données.md".

J'en profite pour vous montrer un outil très utile pour connaître le type d'une variable : [l'opérateur `typeof`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof). Pour l'utiliser, il vous suffit de faire :
```
const maVariable = `Bonjour Paris`
typeof maVariable
// Ici, typeoff renvoie bien `string` mais essaye`par vous-même !
```

## Maniez les autres valeurs primitives

Vous avez donc vu les strings et les numbers. 

### Les booléens

Une des valeurs primitives essentielles en développement [est les booléens](https://developer.mozilla.org/fr/docs/Glossary/Boolean). Leur valeur peut être `true` ou `false`. Vous pouvez y penser comme à un interrupteur, où `true` est l'équivalent de `on` et `false` correspond à `off`. Les booléens permettent d'intégrer de la logique au code (par exemple exécuter des instructions si un booléen est à `true`). 

Comme ce que vous avez vu, pour définir un booléen, il vous suffit de faire :
```
let myVariable = true
```

### Les manières de gérer les erreurs : undefined et null

Comme son nom l'indique, `undefined` est affecté aux variables qui viennent d'être déclarées sans avoir de valeur attribuée.

De la même manière, `null` est un littéral JavaScript représentant la nullité : aucune valeur pour l'objet n'est présente.

Il arrive de rencontrer ces valeurs primitives lorsqu'il y a des erreurs dans le code. Nous ne les utiliserons pas pour le moment, du moins pas volontairement. 


## Découvrez les objets et les tableaux


