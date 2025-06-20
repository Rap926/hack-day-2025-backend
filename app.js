// Modules
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./config/neo4j');

// Routes
const getAreaConnRoute = require("./routes/getAreaConnRoute");
const getDepartmentConnRoute = require("./routes/getDepartmentConnRoute");
const getEverythingRoute = require("./routes/getEverythingRoute");
const getHomeOptimizedRoute = require("./routes/getHomeOptimizedRoute");
const getHomeScreenRoute = require("./routes/getHomeScreenRoute");
const getNodeRoute = require("./routes/getNodeRoute");
const getPeopleInTeamRoute = require("./routes/getPeopleInTeamRoute");
const getPerToPerRoute = require("./routes/getPerToPerRoute");
const getProdRelationsRoute = require("./routes/getProdRelationsRoute");
const getSuiteConnRoute = require("./routes/getSuiteConnRoute");
const getTeamOwnedProdRoute = require("./routes/getTeamOwnedProdRoute");
const sendQueryRoute = require("./routes/sendQueryRoute");
const testRoute = require("./routes/testRoute");
const { getHomeScreen } = require('./controllers/getHomeScreen');

// Config
const app = express();
const PORT = 3000;
const ip = "0.0.0.0"; // "172.29.173.92";

(async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    console.error('Failed to connect to the database. Exiting...');
    process.exit(1);
  }
})();

// Middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(cors());

// Routes
app.use(getAreaConnRoute);
app.use(getDepartmentConnRoute);
app.use(getEverythingRoute)
app.use(getHomeOptimizedRoute)
app.use(getHomeScreenRoute)
app.use(getNodeRoute);
app.use(getPeopleInTeamRoute);
app.use(getPerToPerRoute);
app.use(getProdRelationsRoute);
app.use(getSuiteConnRoute);
app.use(getTeamOwnedProdRoute);
app.use(sendQueryRoute);
app.use(testRoute);

app.listen(PORT, ip, () => {
  console.log(`Server is running on http://${ip}:${PORT}`);
});