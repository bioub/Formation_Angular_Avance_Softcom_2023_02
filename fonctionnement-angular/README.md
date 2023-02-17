# Exercices RxJS

## ClockComponent

Réécrire `ClockComponent` en utilisant les fonctions suivantes de RxJS :
- `interval`
- `map`
- `subscribe` / `unsubscribe`

## CountdownComponent

Créer un nouveau composant `CountdownComponent` avec un bouton qui affiche 10 initialement

```
<button>10</button>
```

Au click de ce bouton décrémenter chaque seconde sa valeur jusqu'à 0

Idéalement utiliser la méthode `fromEvent` pour créer un observable à partir du click (vous pouvez récupérer le bouton avec un @ViewChild)

Les fonctions suivantes de RxJS peuvent être utiles :
- `fromEvent`
- `interval`
- `mergeMap` / `switchMap`
- `map`
- `take` / `takeWhile`
- `mergeMap` / `switchMap`
