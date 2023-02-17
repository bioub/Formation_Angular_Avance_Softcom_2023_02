# Exercices Subject

## Subject

Dans `UsersListComponent` utiliser un `Subject` pour que le `| async` porte sur le `Subject` et ne fasse la requête vers le backend qu'une seule fois

## ReplaySubject

Dans le service `UserService`, modifier le code de `getList$` pour qu'il utilise un `ReplaySubject` stocké en propriété de sorte que quand on revient sur la page `/users` en l'ayant visité précedemment
la requête ne se fasse pas à nouveau.
