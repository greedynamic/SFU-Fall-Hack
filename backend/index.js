import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ticketsDAO from "./dao/ticketsDAO.js";
// import usersDAO from "./dao/usersDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URL, {
  maxPoolSize: 50, //the options now supported
  wtimeoutMS: 2550,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack); //use log4j?
    process.exit(1);
  })
  .then(async (client) => {
    await ticketsDAO.injectDB(client);
    // await usersDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
