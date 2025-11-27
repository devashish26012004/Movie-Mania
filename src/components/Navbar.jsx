import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-lg rounded-3xl w-2xl mt-5 py-3 px-4 box bg-[#e0e0e0] shadow-md hover:bg-gray-300 hover:translate-y-[-3px] transform transition duration-100">
          <nav className="flex justify-evenly font-bold">
            <Link
              to={"/"}
              className="hover:scale-110 transition-transform duration-100 "
            >
              Home
            </Link>
            <Link
              to={"/movies"}
              className="hover:scale-110 transition-transform duration-100"
            >
              Movies
            </Link>
            <Link
              to={"/dashboard"}
              className="hover:scale-110 transition-transform duration-100"
            >
              Dashboard
            </Link>
            <Link
              to={"/Profile"}
              className="hover:scale-110 transition-transform duration-100"
            >
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
