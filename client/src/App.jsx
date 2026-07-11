import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Tasks from "./pages/Tasks";
import AIAssistant from "./pages/AIAssistant";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Roadmap from "./pages/Roadmap";
import Progress from "./pages/Progress";
import AdminDashboard from "./pages/AdminDashboard";


function App() {

  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route 
            path="/register" 
            element={<Register />} 
          />

          <Route 
            path="/dashboard" 
            element={<Dashboard />} 
          />

          <Route 
            path="*" 
            element={<NotFound />} 
          />

          <Route
path="/tasks"
element={<Tasks/>}
/>

<Route
path="/ai"
element={<AIAssistant/>}
/>

<Route

path="/resume"

element={<ResumeAnalyzer/>}

/>

<Route

path="/roadmap"

element={<Roadmap/>}

/>


<Route

path="/progress"

element={<Progress/>}

/>

<Route

path="/admin"

element={<AdminDashboard/>}

/>

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );

}


export default App;