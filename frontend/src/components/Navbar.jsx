
import { Link } from "react-router-dom"; // Importing Link for client-side navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Counseling App</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/profile" className="hover:text-gray-300">
            Profile
          </Link>
          <Link to="/appointment-booking" className="hover:text-gray-300">
            Book Appointment
          </Link>
          <Link to="/video-call" className="hover:text-gray-300">
            Chat&call
          </Link>
          <Link to="/Payments" className="hover:text-gray-300">
         payment
          </Link>
          <Link to="/Login" className="hover:text-gray-300">
         Login
          </Link>
         
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
