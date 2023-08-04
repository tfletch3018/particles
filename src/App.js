import { Outlet, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (

    <div>

      <nav>
        <Link to="/home">particles</Link> |{" "}
        <Link to="/artWork">artWork</Link>
        <Link to="/photoCarousel">photoCarousel</Link>
      </nav>
      <Outlet />
    </div>
    
  );
}

export default App;
