const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

connectDb();

app.use(express.json());
app.use("/api/user", userRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`serverStarts at ${PORT}`.yellow.bold);
});
