# Intégrez de la logique dans votre code : les conditions 

Maintenant que vous avez les bases pour créer des variables qui regroupent des valeurs dans les principaux types (number, string, array, object, boolean, undefined et null), vous allez maintenant pouvoir entrer dans le coeur du sujet du code : la logique 🧠.

## Découvrez le concept de condition en code

> Qu'est-ce que ça évoque, **les conditions** dans le code pour vous ?

Il y a plusieurs manières de les écrire, mais les conditions sont la plupart du temps représentées par des `if` `else`. Ce qui veut dire : si le code correspond à cette condition, alors tu peux exécuter la série d'instruction qui suit, et s'il y a un else, tu exécutes les instructions du else. 

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

## Utilisez les opérateurs de comparaison

L'idée des conditions est donc de comparer une de nos variables à une valeur attendue (dans notre exemple, `18`) ou bien à une autre variable. Pour faire ces comparaisons, nous allons utiliser ce qui s'appelle des opérateurs de comparaison. Vous avez déjà vu `>` et `>=`, mais il en existe d'autres.

Je vous mets une liste des opérateurs de comparaison ici, vous pourrez revenir la consulter au fur et à mesure.

Opérateur | Définition
:-: |:- 
== | Permet de tester l’égalité sur les valeurs
===	| Permet de tester l’égalité en termes de valeurs et de types
!=	| Permet de tester la différence en valeurs
< >	| Permet également de tester la différence en valeurs
!==	| Permet de tester la différence en valeurs ou en types
<	| Permet de tester si une valeur est strictement inférieure à une autre
\>	| Permet de tester si une valeur est strictement supérieure à une autre
<=	| Permet de tester si une valeur est inférieure ou égale à une autre
\>=	| Permet de tester si une valeur est supérieure ou égale à une autre


### Vérifiez l'égalité

Nous commençons avec l'opérateur le plus fréquemment utilisé, qui permet de tester l'égalité entre deux valeurs. Ici, nous ne rentrerons pas dans les détails, mais sachez juste qu'il existe `==` et `===`, et que nous utiliserons uniquement `===`