const { MongoClient } = require("mongodb");

let cached = global._mongoClient;
if (!cached) cached = global._mongoClient = { client: null, promise: null };

async function getClient(uri) {
  if (cached.client) return cached.client;

  if (!cached.promise) {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    cached.promise = client.connect().then(() => {
      cached.client = client;
      return client;
    });
  }
  return cached.promise;
}

module.exports = { getClient };
