const express = require("express");
const apiRouter = require("./routes/apiRoutes");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));