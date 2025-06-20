const { driver } = require('../config/neo4j');

exports.getHomeOptimized =  async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run('MATCH z=(d:Department)-[:Dept_To_Area]->(a:Area) MATCH y=(a)-[:Area_To_Suite]->(s:Suite) MATCH x=(s)-[:Suite_To_Team]->(t:Team) MATCH w=(r:Product)-[:Product_To_Team]->(t) MATCH v=(p:Person)-[:Person_To_Product]->(r) MATCH u=(d)-[:Dept_To_Person]->(p2:Person) MATCH b=(a)-[:Area_To_Person]->(p3:Person) MATCH c=(s)-[:Suite_To_Person]->(p4:Person) MATCH q=(p5:Person)-[:Person_To_Team_Own]->(t) RETURN COLLECT(DISTINCT z), COLLECT(DISTINCT y), COLLECT(DISTINCT x), COLLECT(DISTINCT w), COLLECT(DISTINCT v), COLLECT(DISTINCT u), COLLECT(DISTINCT b), COLLECT(DISTINCT c), COLLECT(DISTINCT q);');
    res.json({ message: 'Successful call', res: result});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};