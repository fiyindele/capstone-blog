import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const header = req.body["title"];
  const textContent = req.body["content"];

  res.render("index.ejs", {
    blogHeader: header,
    blogContent: textContent,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
