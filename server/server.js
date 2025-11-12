const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const socketIO = require("socket.io");
const http = require("http");
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json");
const app = express();

const authRoutes = require("./src/core/auth/auth.routes");
const roleRoutes = require("./src/core/role/role.routes");
const permissionRoutes = require("./src/core/permission/permission.routes");
const userRoutes = require("./src/core/user/user.routes");

//modules
const usergroupRouter = require('./src/modules/usergroups/usergroup.route');

dotenv.config();
const server = http.createServer(app);

//  Socket.IO
const io = socketIO(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
app.use((req, res, next) => {
  req.io = io;
  next();
});
global.io = io;
//  CORS
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

//  Body Parser
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

//  Cookies
app.use(cookieParser());

//  Session (ถ้าจะใช้กับ session auth ด้วย)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// const validateApiKey = (req, res, next) => {
//   const apiKey = req.headers["x-api-key"];
//   if (!apiKey || apiKey !== process.env.X_API_KEY) {
//     return res.status(401).json({ message: "Invalid API key" });
//   }
//   next();
// };

//  Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//  Route Test
app.get("/", (req, res) => {
  res.send("Hello World!");
});


//  Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/permission", permissionRoutes);
app.use("/api/user", userRoutes);

// modules
app.use('/api/usergroups', usergroupRouter);


let onlineUsers = 0;

io.on("connection", (socket) => {
  onlineUsers++;
  console.log(`A user connected. Total: ${onlineUsers}`);
  io.emit("onlineUsers", onlineUsers);
  socket.on("disconnect", () => {
    onlineUsers--;
    console.log(`A user disconnected. Total: ${onlineUsers}`);
    io.emit("onlineUsers", onlineUsers);
  });
});
//  Start Server
server.listen(process.env.PORT, () => {
  console.log(
    `Server running at http://localhost:${process.env.PORT}/api-docs/`
  );
});
