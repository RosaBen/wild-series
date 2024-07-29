# how to create template and use it

## step1=> racine

  ```bash
npm init -y
git init
touch README.md
touch .gitignore
mkdir server
npm create vite@latest client
```

## step2 => client

  ```bash
  cd client
  npm install axios
  npm install react-router-dom
  npm install
  npm run dev

```

## step3=> server

  ```bash
npm init -y
npm install express
npm install -D nodemon
touch .gitignore
touch index.js
```

## step4 => racine

  ```bash
npm i concurrently --save-dev
npm install npm-run-all --save-dev
```

## step5 => package.json => racine

  ```json
  {
  "name": "template",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npm-run-all --parallel dev:client dev:server",
    "dev:client": "npm --prefix ./client run dev",
    "dev:server": "npm --prefix ./server run dev:server",
    "setup": "npm i && npm --prefix ./client i && npm --prefix ./server i"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "concurrently": "^8.2.2",
    "npm-run-all": "^4.1.5"
  }
}

```

## step6 => package.json => server

  ```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev:server": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
```

## step7 => index.js => server

  ```js
  const express = require("express");
const app = express();

app.listen(8000, () => console.info("Le serveur tourne correctement"));

```

## step8 => client

### /src

  ```bash
mkdir pages
mkdir components
mkdir styles
mkdir services
```

### /src/chaque dossier

  ```bash
touch .gitkeep
```

## Final step

Installation :

- npm run setup

Execution :

- npm run dev
- test
  
## create repo on github

  ```bash
git add .
git commit -m"first commit"
git remote add origin <lien ssh>
git push -u origin main
```

## github repo du template

1- aller dans le repo
2- aller dans settings du repo
3- sélectionner "Template repository"
4- aller créer nouveau repo et choisir le template à utiliser => pour créer le nouveau projet
