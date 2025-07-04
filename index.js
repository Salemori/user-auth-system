const express = require("express");
const connectDb = require("./src/config/db");
const userRouter = require("./src/routers/userRouter")
const { swaggerUi, swaggerSpec } = require("./sawagger");
require("dotenv").config();

const app = express();

app.use(express.json());

connectDb();

app.use("/api/v1", userRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT_ONE || process.env.PORT_TWO;

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);

app.get("/", (req, res) => {
  return res.send("User Authentication System is active and running!...");
});
