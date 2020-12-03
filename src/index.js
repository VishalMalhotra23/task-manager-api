const express = require("express");
const app = express();
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(express.json());
//routes
app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// ./node_modules/.bin/env-cmd -f src/.env node src/index.js
//"env-cmd ./config/dev.env nodemon src/index.js"
