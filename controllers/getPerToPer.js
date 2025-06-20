
const { driver } = require('../config/neo4j');

exports.getPerToPer =  async (req, res) => {
  const session = driver.session();
  const { name1, name2 } = req.params;

  try {
    const result = await session.run('OPTIONAL MATCH b=(p:Person)-[:Person_To_Product]->(r:Product) WHERE p.name=$name1 OPTIONAL MATCH m=(p)-[:Person_To_Team]->(t:Team) OPTIONAL MATCH n=(s:Suite)-[:Suite_To_Team]->(t) OPTIONAL MATCH o=(a:Area)-[:Area_To_Suite]->(s) OPTIONAL MATCH q=(d:Department)-[:Dept_To_Area]->(a) OPTIONAL MATCH m2=(s2:Suite)-[:Suite_To_Person]->(p2:Person) WHERE p2.name=$name1 OPTIONAL MATCH n2=(a2:Area)-[:Area_To_Suite]->(s2) OPTIONAL MATCH o2=(d2:Department)-[:Dept_To_Area]->(a2) OPTIONAL MATCH m3=(a3:Area)-[:Area_To_Person]->(p3:Person) WHERE p3.name=$name1 OPTIONAL MATCH n3=(d3:Department)-[:Dept_To_Area]->(a3) OPTIONAL MATCH m4=(d4:Department)-[:Dept_To_Person]->(p4:Person) WHERE p4.name=$name1 OPTIONAL MATCH bb=(pp:Person)-[:Person_To_Product]->(rr:Product) WHERE pp.name=$name2 OPTIONAL MATCH mm=(pp)-[:Person_To_Team]->(tt:Team) OPTIONAL MATCH nn=(ss:Suite)-[:Suite_To_Team]->(tt) OPTIONAL MATCH oo=(aa:Area)-[:Area_To_Suite]->(ss) OPTIONAL MATCH qq=(dd:Department)-[:Dept_To_Area]->(aa) OPTIONAL MATCH mm2=(ss2:Suite)-[:Suite_To_Person]->(pp2:Person) WHERE pp2.name=$name2 OPTIONAL MATCH nn2=(aa2:Area)-[:Area_To_Suite]->(ss2) OPTIONAL MATCH oo2=(dd2:Department)-[:Dept_To_Area]->(aa2) OPTIONAL MATCH mm3=(aa3:Area)-[:Area_To_Person]->(pp3:Person) WHERE pp3.name=$name2 OPTIONAL MATCH nn3=(dd3:Department)-[:Dept_To_Area]->(aa3) OPTIONAL MATCH mm4=(dd4:Department)-[:Dept_To_Person]->(pp4:Person) WHERE pp4.name=$name2 RETURN m,n,o,q,m2,n2,o2,m3,n3,m4, mm,nn,oo,qq,mm2,nn2,oo2,mm3,nn3,mm4;', { name1, name2 });
    res.json({ message: 'Successful call', res: result});
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  } finally {
    session.close();
  }
};