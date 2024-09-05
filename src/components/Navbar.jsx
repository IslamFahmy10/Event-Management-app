import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, CalendarIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-[#E178C5] p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-3xl font-extrabold hover:text-[#FFB38E] transition">
        EventManager
      </Link>
      <div className="flex space-x-6 items-center">
        <Link to="/" className="text-white hover:text-[#FFB38E] transition flex items-center">
          <HomeIcon className="w-7 h-7" />
          <span className="ml-2 hidden md:inline">Home</span>
        </Link>
        <Link to="/login" className="text-white hover:text-[#FFB38E] transition flex items-center">
          <UserIcon className="w-7 h-7" />
          <span className="ml-2 hidden md:inline">Login</span>
        </Link>
        <Link to="/register" className="text-white hover:text-[#FFB38E] transition flex items-center">
          <CalendarIcon className="w-7 h-7" />
          <span className="ml-2 hidden md:inline">Register</span>
        </Link>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;