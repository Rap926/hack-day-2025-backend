const { driver } = require('../config/neo4j');

exports.getTeamOwnedProd =  async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run('MATCH (t:Team)-[r]-(pr:Product) RETURN t, r, pr');
    res.json({ message: 'Successful call', res: result});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};