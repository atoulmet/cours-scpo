# Plongez dans le monde du développement

Et c'est parti pour la première séance ! 🎉

Nous le verrons ensembles en classe, mais je vous récapitule ici ce que nous allons voir durant ce cours.

## Découvrez les objectifs du cours

### Découpage
- La première moitié du semestre (6 séances) sera consacrée aux bases de la programmation. Nous verrons des concepts qui sont communs à tous les langages. Nous travaillerons en JavaScript.
- La deuxième partie du semestre sera quant à elle consacrée au web plus spécifiquement. Vous apprendrez à créer une page web avec du HTML et CSS, à manipuler ses éléments toujours avec JavaScript, et à la peupler avec des datas (JavaScript également).

### Évaluation
L'évaluation sera faite tout au long du semestre. 
Chaque semaine, vous aurez des exercices à réaliser pour la séance suivante. 
À la fin du semestre, vous aurez un rendu à réaliser.
Votre note finale dépendra de votre participation, de votre régularité dans les exercices hebdomadaires, ainsi que de votre rendu final.


### Méthodologie

La méthodologie de ce cours sera différente de ce dont vous avez l'habitude à Sciences Po.

Elle sera inspirée du *learning by doing*. Nous ferons des exercices directement en cours, mais vous aurez également des exercices à faire par vous-mêmes. Parfois, vous n'aurez pas tous les éléments, vous aurez alors besoin d'interroger votre premier allié dans le développement : Google. 

La compétence principale des développeurs et développeuses est de savoir formuler de bonnes recherches sur **Google** (souvenez-vous de la pédagogie à 42, où il n'y a ni cours, ni professeur).

![À 42, ni cours, ni professeur](./images/42-logo.png)

Je vous ai préparé [une liste d'astuces](https://replit.com/@scpo-fall-2021/cours-texte-scpo#S1-Introduction/make-google-search.md) pour faire une recherche Google efficace.
Une fois cette compétence acquise elle vous servira dans tous les domaines, même des domaines insoupçonnés (bricolage, électronique, etc.).


## Faites une première approche du code

Lançons-nous dans le coeur du sujet : le code.

### Le code est partout

Le code nous entoure dans tout ce que nous faisons : vos téléphones portables, vos consoles de jeux vidéos, tous les sites internet que vous consultez, même votre enceinte connectée... fonctionnent grâce au **code**. 

Mais au fait, c'est quoi le code ?

Le code consiste en des instructions : il permet de dire à un ordinateur (la partie hardware), quoi faire. 
On prend un exemple simple avec nos smartphones. Ils sont verrouillés par un mot de passe. 

Lorsque j'essaie d'ouvrir mon téléphone, il requiert un mot de passe. Je tape un mot de passe :
- Si le mot de passe est exact, le téléphone s'ouvre
- Si le mot de passe est incorrect, il me demande de le saisir à nouveau.
- Au bout de X tentatives, il bloque mon téléphone.
- etc.

Tout cela est réalisé grâce au code : les développeurs et développeuses ont défini le comportement de la machine avec le code.

![Une ancienne interface de programmation en Pascal](./images/pascal.jpeg)

### Bas niveau vs. haut niveau

Qu'est-ce qui nous permet de donner ces instructions ? Les langages informatiques. Il en existe plusieurs centaines (en comptant uniquement les langages utilisés, on en dénombre environ 240).

Certains langages sont plus adaptés pour des utilisations particulières. 

On peut distinguer :
- les langages haut niveau, où les instructions sont rédigées dans du texte facile à lire pour un humain, mais plus gourmand en ressources (notamment en espace et puissance de calcul).
- les langages dits bas niveau, dont les instructions sont plus difficilement lisibles pour un humain, donc plus proches de la machine, donc plus optimisés. Par exemple, vous trouverez [le code source ayant servi à faire décoller Apollo 11 en libre accès juste ici](https://github.com/chrislgarry/Apollo-11). Pour aller voir un peu plus en détail, je vous conseille d'aller voir les fichiers dans COMANCHE055, [typiquement ALARM_AND_ABORT.agc](https://github.com/chrislgarry/Apollo-11/blob/master/Comanche055/ALARM_AND_ABORT.agc).

Ce qui nous attend ensembles est plus simple et abordable que cela puisque nous apprendrons à manipuler le langage **haut niveau** JavaScript.

La développeuse ou le développeur va écrire son code dans un Editeur de texte : c'est un peu comme un Microsoft Word, sauf qu'il s'agit ici d'une version pour écrire du code. 
Il faudra ensuite exécuter ses commandes dans un terminal : un peu comme l'interface de votre ordinateur, sauf qu'il n'y a que du texte qui représente vos fichiers, et sur lequel vous lancez donc vos commandes.


## Mettez-vous au travail

Maintenant que vous avez quelques connaissances théoriques, profitons-en pour nous mettre au travail.

### Le matériel nécessaire

* Un ordinateur
Il est indispensable d'amener un ordinateur chaque semaine en cours. Pour coder, vous aurez besoin d'utiliser des caractères tels que `<>/*+-=()[]{}`.

> #ProTip: Sur MacOS, vous pouvez écrire des accolades {} en faisant shift+( ou shift+), et des crochets [] avec option+shift+( ou option+shift+).
Sur PC, vous devez utiliser la touche AltGr avec la touche correspondante.

* Un navigateur moderne
Nous allons faire du développement web. Pour cela, il est essentiel d'utiliser un navigateur qui est répandu. Pour ce cours, je vous recommande FireFox ou Google Chrome.

### Inscrivez vous sur Replit
Pour éviter d'avoir des logiciels spécifiques au développement à installer, nous allons utiliser un Environnement de Développement Intégré. Nous ferons tout sur [la plateforme Replit](https://replit.com/~).

Vous devriez avoir reçu une invitation par mail pour rejoindre la Team scpo-fall-2021. Je vous invite à créer un compte comme ici en indiquant la première lettre de votre prénom et nom de famille en nom utilisateur, et <u>avec votre adresse mail Sciences Po.</u> 👇

![Créer un compte sur Replit](./images/signup-page.png)

Vous remplissez les différents champs. Et 🎉 vous avez accès à votre compte ! Vous pouvez confirmer votre adresse mail dès maintenant. Vous arrivez sur la page d'accueil. Normalement, si vous allez dans l'onglet Teams, vous devriez trouver la Team Sciences Po du cours :

![Ouvrir l'onglet Teams du cours](./images/teams.gif)

### Découvrez Replit

Essayons dès maintenant de créer un fichier de code, ou comme la plateforme Replit les appelle, un "repl". Vous pouvez au choix cliquer sur le bouton en haut à droite avec le "+" ou bien dans la colonne de gauche "+ New repl". Sélectionnez alors "Node.js" (il s'agit de JavaScript), et nommez votre repl "mon-premier-repl". Vous arrivez alors sur l'environnement de travail. 

![Notre environnement de travail dans Replit](./images/environnement-travail.png)

- La partie de gauche vous permet de sélectionner un fichier.
- La partie centrale correspond à l'éditeur de texte.
- La partie de droite est la console. Vous pourrez y exécuter des commandes, vous permettant de faire tourner votre code, et voir le résultat obtenu.

Lançons-nous dans votre premier exercice :
1- Par défaut, un fichier "index.js" a été créé.
2- Dans le l'éditeur de texte, écrivez console.log(42).
3- Cliquez sur le bouton `Run`. Vous devriez obtenir le résultat comme ci-dessous 👇

![Votre premier console.log()](./images/consolelog.gif)

Et voilà ! Vous avez exécuté vos premières lignes de JavaScript ! 🎉

## Pour la prochaine séance

- Relire le cours. Vous y accédez depuis `Teams` > `scpo-fall-2021` > `Teams repls` > `View team repls` > `cours-scpo`. Je vous conseille de le mettre en favori pour pouvoir le retrouver facilement.
- Dans `Teams` > `scpo-fall-2021` > `Teams Project`, vous trouverez des exercices pour chaque séance du cours. Vous devrez réaliser le quiz de la séance 1. Voici [le lien juste ici](https://replit.com/@scpo-fall-2021/1-introductionquiz).

Je vous mets juste ici un screencast (une vidéo où je filme mon écran) pour vous apprendre à réaliser votre exercice, et à le corriger : [allez sur ce lien Youtube](https://youtu.be/y-pAe5tR3Ow)👈.
