import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Tasks from "./pages/Tasks";
import AIAssistant from "./pages/AIAssistant";


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

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );

}


export default App;