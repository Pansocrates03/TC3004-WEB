# TC3004B - Módulo WEB

Clona este repositorio!
```
git clone https://github.com/Pansocrates03/TC3004-WEB
```

## Frontend
1. Instala todos los módulos
```
cd Frontend
npm install
```

2. Corre la aplicación
```
npm start
```

## Backend
1. Instala todos los módulos
```
cd Backend
npm install
```

2. Añade las variables del sistema
```
DB_USER = xxx
DB_PASS = xxx
DB_NAME = xxx
DB_SERVER = xxx

MONGODB_URI = xxx
DB_STRING = xxx
```
Automáticamente se conectará a la base de datos proporcionado por el string, pero esto se puede cambiar añadiendo el objeto "config"

3. Corre la aplicación
```
node index.js
```
