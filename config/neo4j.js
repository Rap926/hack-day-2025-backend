const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
  'neo4j+s://b58334c7.databases.neo4j.io',
  neo4j.auth.basic('neo4j', 'Cj3poGYipIdUkNxdxi4pfekWhDaaBGL_H5Kyy_kYcFE')
)

let session;

const connectToDatabase = async () => {
  try {
    session = driver.session();
    console.log("[!] Connected to database successfully");
  } catch (error) {
    console.error('Error connecting to Neo4j:', error);
    throw error;
  }
};

module.exports = {
  driver,
  connectToDatabase,
  getSession: () => session,
  closeConnection: async () => {
    if (session) {
      await session.close();
    }
    await driver.close();
  }
}