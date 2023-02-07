NodeJs / Express

Le but sera de créer une app NodeJs from scratch.

L'app aura:

- Une route GET qui renvoie tous les users
- Une route GET qui renvoie un user
- Une route POST qui modifiera un user.
- Une route DELETE qui va supprimer un user.

Nous n'utiliserons pas de base de donnée, un objet Users fera guise de BDD.
L'objet Users est fourni dans le fichier users.js de ce dossier.
Vous allez pouvoir y arriver step by step, une chose après l'autre.
Google est votre ami, vos voisins aussi !
Lors d'installation de package, utilisez `--save` pour garder la trace de vos package installé.
Vous pouvez tout coder dans app.js, mais si possible split votre code dans plusieurs fichiers si vous en avez l'envie.
Le tableau `users` doit être importé dans app.js, pas copié-coller.

# Steps

1. Créez un nouveau répertoire pour le projet qui se nomme "api-users".
2. Executer la commande `npm` pour initier le projet (init) dans le dossier "api-users".
3. Vous allez devoir lancer une commande npm pour installé les packages présents dans le fichier `package.json`
4. Installer le package npm: "Express"
5. Créer un fichier app.js qui contiendra le code pour run votre serveur.
6. Le lancement du serveur devra aficher `Express is running on port: numeroDuPort`. (Encore une fois, Google et votre voisin sont vos amis, Bon chance !)
   Il y a beaucoup de tuto à disposition pour trouver le code qui lance un serveur express
7. Créer un route GET `/users` qui renvoie tous les users du tableau `user`.
8. Créer une route GET `/user/:id` qui renvoie le user qui posséde l'id passé en paramètre.
9. Créer une route POST `/users` qui reçoit dans son body l'objet ci-dessous, qui l'ajoute au tableau `users` et renvoie le nouveau tableau. L'id du nouvel entrant devra être l'id du dernier user du tableau `users + 1`.
   N'ajouter pas l'id en dur, c'est moins drôle.
   L'objet à envoyer via le body: { name: 'Peach', age: 23, salary: 99000 }
10. Créer une route DELETE `/users/:id` qui supprime dans le tableau `users`, l'user avec l'id passé en paramètre de la requête, renvoyer ensuite le nouveau tableau.
