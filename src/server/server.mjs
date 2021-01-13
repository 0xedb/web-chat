import faker from "faker";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Eliza from "elizabot";
import { Server as Io } from "socket.io";
import { Server } from "http";

const app = express();
const http = Server(app);
const io = new Io(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


const eliza = new Eliza();

const PORT = process.env.PORT || 2021;

app.use(cors());
app.use(bodyParser.json());

app.post("/register", (req, res) => {
  const data = {
    firstName: faker.name.firstName(0),
    lastName: faker.name.lastName(0),
  };

  res.json(data);
});

app.get("/", (req, res) => {
  res.end("");
});

app.post("/chat", (req, res) => {
  console.log(req.body);
  const reply = eliza.transform(req.body.msg);
  res.end(reply);
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (data) => {
    const reply = eliza.transform(data);
    console.log("DATA::", data);

    socket.emit("reply", reply);
  });
});

http.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
