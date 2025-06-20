const { driver } = require('../config/neo4j');

exports.sendQuery =  async (req, res) => {
  const session = driver.session();
  const { query } = req.params;

  try {
    if (query) {
      // Decode the query parameter to handle special characters
      const decodedQuery = decodeURIComponent(query);
      console.log("Decoded Query: ", decodedQuery);
      // Run the decoded query
      const result = await session.run(decodedQuery);
      res.json({ message: 'Query executed successfully', res: result.records, location: "test environment" });
    }
  } catch (error) {
    console.error('Error running query:', error);
    res.status(500).json({ message: 'Error running query', error: error.message });
  }
};