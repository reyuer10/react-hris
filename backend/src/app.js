const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http:localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser());
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
