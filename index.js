const express = require("express");
cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./allCourses.json");

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/all-courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  // res.send("Course ID: " + req.params.id);
  const id = req.params.id;
  const course = courses.find((course) => course.id === id);
  res.send(course);
});

app.get("/checkout/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((course) => course.id === id);
  res.send(course);
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
