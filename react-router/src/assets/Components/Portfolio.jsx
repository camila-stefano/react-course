import { Link, Routes, Route } from "react-router-dom";
import Proyecto1 from "./Proyecto1";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to="/portfolio/Portfolio">Proyecto-1 anidado</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/portfolio/Portfolio" element={<Proyecto1 />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Portfolio;
