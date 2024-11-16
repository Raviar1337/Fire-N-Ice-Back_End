const express = requier("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.get("/api", (req, res) => {
  res.send("Welcome to the API!!");
});

app.listen(PORT, () => {
  cnonsole.log(`Server is running on port ${PORT}`);
});
