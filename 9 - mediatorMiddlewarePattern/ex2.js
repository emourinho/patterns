const app = require("express")();
const html = require("./ex2-data.js");

app.use("/", (req, res, next) => {
  req.headers["test-header"] = 1234;
  next()
}, (req, res, next) => {
  console.log(`Request has test header: ${req.headers["test-header"]}`)
  next()
})

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html")
  res.send(Buffer.from(html))
})

app.listen(8080, function () {
  console.log("Server is running on 8080")
});