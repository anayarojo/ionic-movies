## ionic-movies
Aplicación hecha en ionic 4 con el objetivo de encontrar información de películas

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