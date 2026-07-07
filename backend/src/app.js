const express = require("express");
const cors = require("cors");

const errorHandler = require("./middleware/error.middleware");

const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");
const emergencyRoutes = require("./routes/emergency.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/emergency", emergencyRoutes);

app.use(errorHandler);

module.exports = app;