import express, { NextFunction, Request, Response } from "express";
import { users } from "./data";
const app = express();

app.use(express.json());

const checkIdIsANumber = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "id is not a number" });
  }
  next();
};

app.post(
  "/products/:id", // le funzioni di callback successive alla definizione dell'endpoint si chiamano middleware
  checkIdIsANumber,
  (req, res, next) => {
    res.json({ message: "tutto ok" });
    next();
  },
  (req, res, next) => {}
);

app.get("/", (req, res) => {
  res.json({ message: "Hello world1" });
  console.log("effettuo un log dopo lo chiusura della chiamata");
});

app.get("/users/:id", checkIdIsANumber, ({ params }, res) => {
  const id = Number(params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Id is not a number" });
  }
  const user = users.find((item) => item.id === id);
  if (user) {
    return res.json(user);
  }
  return res.status(404).json({ message: "User not found" });
});

app.get("/users", ({ query }, res) => {
  let usersCopy = [...users];
  if (query.name) {
    usersCopy = usersCopy.filter((item) => item.name === query.name);
  }
  if (query.gender) {
    usersCopy = usersCopy.filter((item) => item.gender === query.gender);
  }
  res.json(usersCopy);
});

app.listen(3000, () => {
  console.log("Server is running!");
});
