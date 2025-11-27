import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Movies from "./components/Movies";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="*"
          element={
            <>
              <h1 className="text-center font-bold text-7xl my-60">
                Error 404 : Page Not Found!
              </h1>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
