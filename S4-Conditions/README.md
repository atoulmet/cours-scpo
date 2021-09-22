# Intégrez de la logique dans votre code : les conditions 

Maintenant que vous avez les bases pour créer des variables qui regroupent des valeurs dans les principaux types (number, string, array, object, boolean, undefined et null), vous allez maintenant pouvoir entrer dans le coeur du sujet du code : la logique 🧠.

## Découvrez le concept de condition en code

> Qu'est-ce que ça évoque, **les conditions** dans le code pour vous ?

Il y a plusieurs manières de les écrire, mais les conditions sont la plupart du temps représentées par des `if` / `else`. Ce qui veut dire : si le code correspond à cette condition, alors la machine peut exécuter la série d'instruction qui suit, et s'il y a un else, elle exécute les instructions du else. 

On prend un exemple tout simple avec le droit d'acheter de l'alcool. Si on devait le traduire en code, cela nous donnerait :

```
if (majeur)
    droit d'acheter de l'alcool
else
    pas le droit d'acheter de l'alcool
```

On pousse l'exemple un peu plus loin en s'appuyant sur une variable `age`. Pour cela on va utiliser l'élément de comparaison `>` qui se traduit par "plus grand que", que vous avez sûrement déjà vu en mathématiques.

On reprend notre exemple 👇
```
if (age > 18)
    droit d'acheter de l'alcool
else
    pas le droit d'acheter de l'alcool
```

D'ailleurs, 18 est compris, donc il nous faut le signe "plus grand ou égal" qui s'écrit de la manière suivante `>=` ce qui nous donne : 
```
if (age >= 18)
    droit d'acheter de l'alcool
else
    pas le droit d'acheter de l'alcool
```

Enfin, vous commencez à saisir l'idée ? 

## Comparez avec les opérateurs de comparaison

L'idée des conditions est donc de comparer une de nos variables à une valeur attendue (dans notre exemple, `18`) ou bien à une autre variable. Pour faire ces comparaisons, nous allons utiliser ce qui s'appelle des opérateurs de comparaison. Vous avez déjà vu `>` et `>=`, mais il en existe d'autres.

### Comprenez la relation entre comparaison et booléens
D'ailleurs, essayez de faire un simple `console.log` en utilisant `>` pour voir.
La comparaison nous renvoie `true` ou `false`. 
C'est normal : les comparaisons s'appuient sur les booléens.

> Vous vous rappelez des booléens ? Nous allons les utiliser à partir de maintenant en anglais, et avec des `is` ou `has` au début de leur nommage.

Je vous mets une liste des opérateurs de comparaison ici, vous pourrez revenir la consulter au fur et à mesure.

Opérateur | Définition
:-: |:- 
===	| Permet de tester l’égalité en termes de valeurs et de types
!==	| Permet de tester la différence en valeurs ou en types
<	| Permet de tester si une valeur est strictement inférieure à une autre
\>	| Permet de tester si une valeur est strictement supérieure à une autre
<=	| Permet de tester si une valeur est inférieure ou égale à une autre
\>=	| Permet de tester si une valeur est supérieure ou égale à une autre


### Vérifiez l'égalité

Nous commençons avec l'opérateur le plus fréquemment utilisé, qui permet de tester l'égalité entre deux valeurs. Ici, nous ne rentrerons pas dans les détails, mais sachez juste qu'il existe `==` et `===`, et que nous utiliserons uniquement `===`.

`===` va nous permettre de comparer deux éléments, et mous retournera `true` s'ils sont égaux, et `false` dans le cas contraire.

Essayez pour voir ! On fait 👇
```
console.log(42 === 43)
```
On obtient `false`, forcément, puisque 42 n'est pas égal à 42.

Mais le mieux est de l'utiliser dans des variables, je vous laisse essayer dans replit :
```
const leftValue = (4 + 11 + 26 + 43) / 2
const rightValue = 42
console.log(leftValue === rightValue)
```

Et on obtient bien `true`.

### Vérifiez la différence

Dans la même logique, nous utiliserons `!==` pour vérifier que deux éléments sont bien différents l'un de l'autre.

On refait une petite démo :
```
const expectation = 10000
const reality = 0
```

Et quand on fait 

```
console.log(expectation !== reality)
```

On a bien `true` qui s'affiche.


### Vérifiez les ordres de grandeur

Vous l'avez déjà vu, mais les signes `>`, `<`, `>=` et  `<=` nous permettent de comparer deux éléments et d'obtenir des ordres de grandeur.

### Exercez-vous

Petit exercice pratique qui permet de jouer avec les opérateurs de comparaison

## Lancez-vous dans les conditions

Maintenant que vous saisissez la logique des conditions, et que vous avez de quoi faire vos comparaisons, c'est le moment de vous lancer ! Vous allez créer vos premières conditions en JS.

Je vous mets une démonstration de la syntaxe des conditions en JS dans le fichier où vous allez faire l'exercice, et à vous d'écrire votre première condition ! Si vous voulez plus d'exemples, vous pouvez également [aller voir la documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else).

> Exercice avec prompt qui affiche texte en fonction de l'input utilisateur (2 possibilités de `if`, puis 3 possibilités de `if`)


## Découvrez les opérateurs logiques

Vous avez appris à utiliser les opérateurs de comparaison dans les conditions. Mais vous allez maintenant pouvoir aller encore plus loin en utilisant les opérateurs logiques `&&` et `||`. Vous pouvez les voir comme une manière de "cumuler" les conditions entre elles.

`&&` va permettre de répondre à la condition `ET`.
Si on le ramène aux booléens, cet opérateur renvoie true si toutes les comparaisons sont évaluées à `true`. Mais s'il y un seul `false`, il renvoie `false`.

`||` permettra de répondre à `OU`.
Dans le cas de `||` dans les booléens, `||` renvoie `true` si au moins une des comparaisons est `true`.

Essayez pour voir. On fait
`console.log(true && true && true)`
`console.log(true && true && false)`
`console.log(false || false || true)`

Je vous donne un exemple concret tout de suite.

Pour pour voter aux élections présidentielles en France, il faut :
- être français·e
- avoir plus de 18 ans
- être inscrit·e sur les listes électorales.

Ce qui nous donnerait :
```
if (isFrench === true && hasLegalAge === true && isSubscribed === true) {
    console.log("Vous pouvez voter")
}

else {
     console.log("Vous ne pouvez pas voter")
}
```

Reprenons un exemple concret pour comprendre l'opérateur `||` qui correspond à `OU`.

Aujourd'hui, on peut avoir le pass sanitaire en ayant :
- un schéma de vaccination complet
- un test PCR de moins de 72 heures
- un test antigénique de moins de 72 heures

Ce qui nous donne 👇
```
if (isVaccinated === true || hasPCRTest === true || hasRapidTest === true) {
    console.log("Yay ! Vous pouvez aller au cinéma, en concert, en boîte de nuit ✨")
}
if (else) {
    console.log("Dommage...")
}
```

Et vous allez pouvoir combiner les `ET &&` et les `OU ||` comme vous le souhaitez pour traduire vos problèmes logiques. Comme en mathématiques, vous pouvez utiliser les parenthèses pour prioriser les expressions qui doivent être comparées en premier.

> Parfois, on peut se perdre dans l'utilisation des opérateurs logiques. Si c'est le cas, pas de panique. Le plus simple reste d'ouvrir une console Javascript, et de faire des `console.log` directement pour voir ce que cela donne.
