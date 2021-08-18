## Découvrez les types de données

Nous n'allons pas nous attarder sur le sujet des types dans le cadre de ce cours. Mais pour votre culture générale, sachez que les types existent depuis toujours en informatique. 

En fait, quand on crée une variable, on dit à notre machine (notre ordinateur) "tu vas dans ta mémoire, et tu y stockes cette valeur". Et si on pousse encore plus, vous savez que tout est stocké en binaire (des 0 et des 1). Donc l'ordinateur va traduire notre valeur en 0 et 1, et la stocker à l'endroit qui correspond à notre variable. 

SAUF QUE. Un nombre traduit en binaire ne prend pas le même espace de stockage qu'une chaîne de caractères. C'est pour cela qu'historiquement nous avons les types. Certains langages exigent dès la déclaration de la variable qu'on lui précise de quel type elle est.
Exemple 👇
```
int monNombre = 42 // Int pour integer, donc c'est un nombre
string maChaine = "Bonjour"
```

JavaScript est beaucoup plus flexible, et fait tout le travail pour nous. Ainsi, on peut totalement changer de type sans effort :
```
let maVariable = "Hello world"
maVariable = 13
```