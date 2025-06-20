const { driver } = require('../config/neo4j');

exports.getProdRelations =  async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run('MATCH (p1:Product)-[r]->(p2:Product) RETURN p1, r, p2');
    res.json({ message: 'Successful call', res: result});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};