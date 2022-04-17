import mongodb from "mongodb";
import {Store} from "primate";

export default class MongoDBStore extends Store {
  async open() {
    if (this.database === undefined) {
      const client = new mongodb.MongoClient(this.path);
      await client.connect();
      this.database = client.db(this.name);
    }
    return this;
  }

  use(collection) {
    return this.database.collection(collection);
  }

  count(collection, criteria) {
    return this.use(collection).countDocuments(criteria);
  }

  async one(collection, _id = {}, options) {
    const criteria = typeof _id === "string" ? {_id} : _id;
    return await this.use(collection).findOne(criteria, options) ?? undefined;
  }

  find(collection, criteria, options) {
    return this.use(collection).find(criteria, options).toArray();
  }

  save(collection, criteria, document) {
    const upsert = true;
    return this.use(collection).replaceOne(criteria, document, {upsert});
  }

  delete(collection, criteria) {
    return this.use(collection).deleteMany(criteria);
  }
}
