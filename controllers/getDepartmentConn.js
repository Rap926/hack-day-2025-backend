const { driver } = require('../config/neo4j');

exports.getDepartmentConn =  async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run('CALL {WITH * MATCH (d:Department)-[r]->(n) WHERE n:Person OR n:Area RETURN d AS fromNode, r AS rel, n AS toNode } RETURN fromNode, rel, toNode');
    res.json({ message: 'Successful call', res: result});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};