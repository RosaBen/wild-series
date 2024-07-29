# Les contrôleurs

Les contrôleurs occupent une position centrale dans la gestion de votre application, utilisant l'acronyme B. R. E. A. D. pour structurer nos opérations. Chaque contrôleur a accès aux opérations CRUD de nos gestionnaires, facilitant ainsi la gestion des interactions avec les éléments de la base de données.(server/app/controllers/<item>Actions.js)

## Installation

```js
// Import access to database tables
const tables = require("../../database/tables");
```

## Opérations des Contrôleurs

### Browse (lire tous les éléments)

```js
const browse = async (req, res, next) => {
    try {
        const items = await tables.<entity>.readAll();
            res.json(items);
        } catch (err) {
            next(err);
    }
};
```

### Read (lire un élément)

```js
const read = async (req, res, next) => {
    try {
        const item = await tables.<entity>.read(req.params.id);
        if (item == null) {
            res.sendStatus(404);
        } else {
            res.json(item);
        }
    } catch (err) {
        next(err);
    }
};
```

### Edit (mettre à jour un élément)

```js
const edit = async (req, res, next) => {
    const updatedData = req.body;
try {
await tables.<entity>.update(req.params.id, updatedData);
res.sendStatus(200);
} catch (err) {
next(err);
}
};
```

### Add (créer un nouvel élément)

```js
const add = async (req, res, next) => {
    const item = req.body;
    try {
        const insertId = await tables.<entity>.create(item);
        res.status(201).json({ insertId });
    } catch (err) {
        next(err);
    }
};
```

### Destroy (supprimer un élément)

```js
const destroy = async (req, res, next) => {
    try {
await tables.<entity>.delete(req.params.id);
res.sendStatus(204);
} catch (err) {
next(err);
}
};
```

## Utilisation

backend/src/controllers/<item>Controllers.js

```js
module.exports = {
browse,
read,
edit,
add,
destroy,
};
```

