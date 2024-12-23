import { Footer } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png";

export function Navbar() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/All/${category}`);
  };

  return (
    <Footer container className="bg-blue-600 text-white p-6">
      <div className="w-full">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} alt="News Logo" className="w-20 h-20" />
            <span className="ml-2 text-lg font-bold">News</span>
          </Link>


          <Link to="/newCr">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Maqola qo‘shish +
            </button>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Uzb", "Jxn", "Spt"].map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                {category === "Uzb" && "O'zbek"}
                {category === "Jxn" && "Jahon iqtisodiyot"}
                {category === "Spt" && "Sport"}
              </button>
            ))}
            <Link to="/login">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Login
              </button>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav className="fixed z-50 bottom-0 left-0 w-full bg-blue-700 text-white flex items-center justify-around px-4 py-3 md:hidden shadow-md">
          {["Uzb", "Jxn", "Spt"].map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="flex flex-col items-center"
            >
              <img
                className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                src={
                  category === "Uzb"
                    ? "https://th.bing.com/th?id=OIP.Fwwc8Cp-5P7Gm87zsVjhXwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    : category === "Jxn"
                    ? "https://th.bing.com/th/id/OIP.Tp1ymy-58K9OzhLaCND7zAHaH5?rs=1&pid=ImgDetMain"
                    : "https://th.bing.com/th?id=OIP.f_V3BIGWyq4LAgZdZ5X9ZAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                }
                alt={category}
              />
              <span className="text-xs">
                {category === "Uzb" && "O'zbek"}
                {category === "Jxn" && "Jahon"}
                {category === "Spt" && "Sport"}
              </span>
            </button>
          ))}
          <Link to="/contacts" className="flex flex-col items-center">
            <img
              className="w-6 h-6 transition-transform duration-200 hover:scale-110"
              src="https://th.bing.com/th?id=OIP.q4v-Bk7VpV8UNypwm2NAfAHaFW&w=293&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Contacts"
            />
            <span className="text-xs">Contact</span>
          </Link>
        </nav>

        {/* Footer Divider */}
        <Footer.Divider className="my-6 border-gray-400" />

        {/* Footer Copyright */}
        <Footer.Copyright
          href="/"
          by="News™"
          year={2024}
          className="text-gray-200 text-center"
        />
      </div>
    </Footer>
  );
}
