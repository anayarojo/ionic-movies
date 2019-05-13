## Ionic movies
Aplicación hecha en ionic 4 con el objetivo de encontrar información de películas

![Ionic 4 ─ Movies ─ Preview 1](https://raw.githubusercontent.com/anayarojo/ionic-movies/master/wiki/img/Ionic%204%20%E2%94%80%20Movies%20%E2%94%80%20Preview%201.PNG)

![Ionic 4 ─ Movies ─ Preview 2](https://raw.githubusercontent.com/anayarojo/ionic-movies/master/wiki/img/Ionic%204%20%E2%94%80%20Movies%20%E2%94%80%20Preview%202.PNG)

![Ionic 4 ─ Movies ─ Preview 3](https://raw.githubusercontent.com/anayarojo/ionic-movies/master/wiki/img/Ionic%204%20%E2%94%80%20Movies%20%E2%94%80%20Preview%203.PNG)

### Commands

```
ionic g service services/movies
ionic g module pipes
ionic g pipe pipes/image --skipTests=true
ionic g module components
ionic g component components/slideshow-backdrop --skipTests=true

ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage

ionic g service services/local-storage --skipTests=true
ionic g pipe pipes/image-filter --skipTests=true
```

### API documentation

https://www.themoviedb.org/

https://developers.themoviedb.org/3/getting-started/introduction

### Ionic storage

https://ionicframework.com/docs/building/storage

### Recreate icons
```
ionic cordova resources
```

##### Demo
https://www.youtube.com/watch?v=wWh7CKcYQQk
