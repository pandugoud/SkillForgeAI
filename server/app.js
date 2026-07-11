const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");


// Load environment variables
dotenv.config();


// Connect Database
connectDB();


const app = express();


// Middleware

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);


app.use(express.json());


app.use(cookieParser());


app.use(helmet());


app.use(morgan("dev"));



// Test Route

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "SkillForge AI Backend Running"
    });

});



// API Routes

app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/projects",
    projectRoutes
);



// Error Handler

app.use((err, req, res, next) => {

    console.log(err.stack);

    res.status(500).json({

        success:false,

        message:"Something went wrong"

    });

});



// Server Start

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(
        `Server running on ${PORT}`
    );

});