const express = require("express");
const apiRouter = require("./routes/apiRoutes");
const cors = require("cors");

const app = express();

require("dotenv").config();

const corsOptions = {
    origin: 'https://wheres-waldo-frontend-csxj.onrender.com',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));