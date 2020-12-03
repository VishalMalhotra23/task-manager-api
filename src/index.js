const app = require("./app");

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// ./node_modules/.bin/env-cmd -f src/.env node src/index.js
//"env-cmd ./config/dev.env nodemon src/index.js"
