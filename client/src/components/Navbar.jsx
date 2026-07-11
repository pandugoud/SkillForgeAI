import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="bg-gray-900 text-white px-8 py-5 flex justify-between items-center">

      <Link 
        to="/"
        className="text-2xl font-bold"
      >
        SkillForge AI
      </Link>


      <div className="space-x-6">

        <Link
          to="/login"
          className="hover:text-blue-400"
        >
          Login
        </Link>


        <Link
          to="/register"
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}