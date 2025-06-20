

const { driver } = require('../config/neo4j');

exports.getPeopleInTeam =  async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run('MATCH (p:Person)-[r:Person_To_Team|Person_To_Team_Own]->(t:Team) RETURN p, r, t');
    res.json({ message: 'Connected to Neo4j', res: result.records[0].get('result').toInt(), location: "test environment"});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};