import express from "express";
import students from "./api/students";
import teachers from "./api/teachers";

const routes = express.Router();
routes.get("/", (req, res) => {
  res.send("Hello, world!");
});
routes.use('/teachers',teachers);
routes.use('/students',students);
export default routes;
