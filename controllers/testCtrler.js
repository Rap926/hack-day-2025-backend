const { driver } = require('../config/neo4j');

exports.testDatabase =  async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run('RETURN 1 AS result');
    res.json({ message: 'Connected to Neo4j', res: result.records[0].get('result').toInt(), location: "test environment"});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};