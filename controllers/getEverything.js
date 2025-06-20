const { driver } = require('../config/neo4j');

exports.getEverything =  async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run('MATCH (n) RETURN n');
    res.json({ message: 'Connected to Neo4j', res: result});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};