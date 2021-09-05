## Assignez des valeurs vos variables avec const et let

### Le cas de `const`
Mais une fois la variable déclarée, est-il possible de changer la valeur qui lui est affectée ?

Essayez pour voir.
On fait :
```
const maVariable = 6 * 7
maVariable = 10
console.log(maVariable)
```

...Et on a une erreur !
![Erreur de changement de valeur](./images/error.png)

C'est normal, `const` ne permet pas de changer la valeur assignée à la variable `maVariable`.
Ce type de variable a été créé pour avoir une rigueur dans le code, où on ne peut pas changer la valeur assignée. Si on a besoin d'assigner une nouvelle valeur, on peut tout simplement déclarer une nouvelle variable :
```
const maVariable = 6 * 7
const maNouvelleVariable = 10
console.log(maVariable, maNouvelleVariable)
```

Et voilà ! 🎉

### Changez vos valeurs assignées avec `let`
Si vous avez vraiment besoin de changer de valeur, vous pouvez aussi utiliser `let`, qui permet de changer de valeur assignée. 

Typiquement :
```
let ceciEstUnTest = 0
ceciEstUnTest = 25
// Affichera bien 25 ici
console.log(ceciEstUnTest)
```

Pour vous donner un exemple où une variable est utile : lorsqu'on souhaite incrémenter notre valeur (l'augmenter régulièrement). Voici un exemple 👇
```
let compteur = 1
compteur = compteur + 1
compteur = compteur + 1
compteur = compteur + 1
console.log(compteur)
```


### N'utilisez pas `var`

Dans les anciennes versions de JavaScript, `let` et `const` n'existaient pas. À la place, on avait `var` dont le comportement était un peu différent. Ces différences rentrent un peu plus dans la technique, dont vous n'aurez pas besoin pour le moment. Gardez juste à l'esprit qu'il vaut mieux utiliser `var`. Donc si vous le voyez dans un morceau de code que vous trouvez en ligne, essayez de le remplacer par `let` ou `const`.

