# Primate MongoDB store

This store module facades [MongoDB][mongodb], allowing you to work with MongoDB
databases.

## Requirements

MongoDB needs to be installed. On Arch Linux it is installable via the AUR. You
will typically need a AUR helper for that.

```
yay -S mongodb-bin
```

If you use another operating system, consult its package manager or the MongoDB
website on how to install and run it.

## Installing

```
npm install primate-mongodb-store
```

## Using

Import the module and instance a store with `name` (database name) and `path`
(path to MongoDB).

```js
import MongoDBStore from "primate-mongodb-store";
export default new MongoDBStore({"name": "app", "path": "mongodb://localhost"});
```

## License

BSD-3-Clause

[mongodb]: https://mongodb.com
