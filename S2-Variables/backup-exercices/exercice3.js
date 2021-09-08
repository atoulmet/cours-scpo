// 1- Vous avez deux variables proposition1 et proposition2. Utilisez la méthode endsWith pour déterminer si proposition1 et proposition2 sont des questions, et afficher true ou false en fonction.

let proposition1 = "Être ou ne pas être, telle est la question."
let proposition2 = "C'est une bonne situation ça scribe ?"

console.log(votreRéponse1)
console.log(votreRéponse2)

// 2- Cette fois-ci, vous avez les variables proposition3 et proposition4. Utilisez la méthode includes pour déterminer si la phrase inclut le mot "covid".

let proposition3 = "Le dictionnaire le Robert a choisi de valider l'uilisation du masculin pour le covid"

let proposition4 = "Le petit Larousse, contrairement au petit Robert, l'écrit avec une majuscule, et au féminin ce qui donne la Covid"

console.log(votreRéponse3)
console.log(votreRéponse4)

// 3- Vous avez maintenant une variable slogan. En utilisant la méthode slice, vous devrez afficher uniquement "c'est notre projet !!!!!". Attention ici, slice utilise des index : il s'agit de la position dans la chaîne de caractère. Vous devrez commencer à compter par 0.
let slogan = "Parce que c'est notre projet !!!!!"

console.log(votreRéponse)

// 4- Toujours à partir de slice et de la variable slogan, vous devrez cette fois-ci affique uniquement "Parce que"

console.log(votreRéponse)


////////////////


// 1- Vous avez deux variables proposition1 et proposition2. Utilisez la méthode endsWith pour déterminer si proposition1 et proposition2 sont des questions, et afficher true ou false en fonction.

let proposition1 = "Être ou ne pas être, telle est la question."
let proposition2 = "C'est une bonne situation ça scribe ?"

console.log(proposition1.endsWith('?'))
console.log(proposition2.endsWith('?'))

// 2- Cette fois-ci, vous avez les variables proposition3 et proposition4. Utilisez la méthode includes pour déterminer si la phrase inclut le mot "covid".

let proposition3 = "Le dictionnaire le Robert a choisi de valider l'uilisation du masculin pour le covid"

let proposition4 = "Le petit Larousse, contrairement au petit Robert, l'écrit avec une majuscule, et au féminin ce qui donne la Covid"

console.log(proposition3.includes('covid'))
console.log(proposition4.includes('covid'))
// => Vous voyez ici que la casse, la majuscule donc, est importante !

// 3- Vous avez maintenant une variable slogan. En utilisant la méthode slice, vous devrez afficher uniquement "c'est notre projet !!!!!"
let slogan = "Parce que c'est notre projet !!!!!"

console.log(slogan.slice(10))

// 4- Toujours à partir de slice et de la variable slogan, vous devrez cette fois-ci affique uniquement "Parce que"

console.log(slogan.slice(0,9))