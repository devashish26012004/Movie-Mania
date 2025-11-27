import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-lg rounded-full border border-gray-400 w-2xl mt-5 py-3 px-4 box bg-[#e0e0e0] shadow-md hover:translate-y-[-3px] transform transition duration-100">
          <nav className="flex justify-evenly font-semibold opacity-85">
            <Link
              to={"/"}
              className="hover:scale-110 transition-transform duration-100 hover:underline underline-offset-2"
            >
              Home
            </Link>
            <Link
              to={"/movies"}
              className="hover:scale-110 transition-transform duration-100 hover:underline underline-offset-2"
            >
              Movies
            </Link>
            <Link
              to={"/dashboard"}
              className="hover:scale-110 transition-transform duration-100 hover:underline underline-offset-2"
            >
              Dashboard
            </Link>
            <Link
              to={"/Profile"}
              className="hover:scale-110 transition-transform duration-100 hover:underline underline-offset-2"
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
