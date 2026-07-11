require("dotenv").config();


const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const aiRoutes = require("./routes/aiRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const progressRoutes = require("./routes/progressRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Load environment variables
dotenv.config();


// Connect Database
connectDB();


const app = express();


// Middleware

app.use(
  cors({
    origin: [
      "https://skill-forge-ai-eight.vercel.app",
      "http://localhost:5173"
    ],
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

app.use(
    "/api/tasks",
    taskRoutes
);

// API Routes

app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/projects",
    projectRoutes
);

app.use(
"/api/ai",
aiRoutes
);

app.use(
"/api/resume",
resumeRoutes
);

app.use(
"/api/roadmap",
roadmapRoutes
);

app.use(
"/api/progress",
progressRoutes
);


app.use(
"/api/admin",
adminRoutes
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
