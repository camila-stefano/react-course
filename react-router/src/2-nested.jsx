import { Link, Route, Routes } from "react-router-dom";
import HomeLayout from "./assets/Components/HomeLayout";
import Portfolio from "./assets/Components/Portfolio";

const Nested = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/portfolio/proyecto-1" element={<HomeLayout />}></Route>
          <Route path="/portfolio/proyecto-2" element={<Portfolio />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Nested;
