const { driver } = require('../config/neo4j');

exports.getNode = async (req, res) => {
  const session = driver.session();
  await console.log(req.params)
  const { id, name, description } = req.params;

  try {

    let query = '';
    let params = {};

    if (id) {
      query = 'MATCH (n) WHERE n.id = $id RETURN n';
      params = { id: parseInt(id) };
    } else if (name) {
      const decodedName = decodeURIComponent(name); // Decode the name
      console.log(decodedName)
      query = 'MATCH (n) WHERE toLower(n.name) = toLower($name) RETURN n';
      params = { name: decodedName };
    } else if (description) {
      const decodedDescription = decodeURIComponent(description); // Decode the description
      query = 'MATCH (n) WHERE toLower(n.description) = toLower($description) RETURN n';
      params = { desc: decodedDescription };
    } else {
      return res.status(400).json({ message: 'Please provide either id, name, or description' });
    }

    const nodeQueryResult = await session.run(query, params);

    const nodes = nodeQueryResult.records.map(record => record.get('n').properties);

    if (nodes.length > 0) {
      res.json({
        nodes,
      });
    } else {
      res.status(404).json({ message: 'Node not found.' });
    }


  } catch (error) {
    console.error('Error retrieving node:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  } finally {
    if (session) {
      session.close();
    }
  }

};