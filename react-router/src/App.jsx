import { Link, Route, Routes } from "react-router-dom";
import HomeLayout from "./assets/Components/HomeLayout";
import Portfolio from "./assets/Components/Portfolio";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </section>
    </div>
  );
};

export default App;
