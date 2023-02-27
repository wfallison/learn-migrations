const express = require("express");
const db = require("./data/db.js");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3500;

app.get("/todo", async (req, res) => {
  const todos = await db("todo"); // making a query to get all todos
  res.json({ todos });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
