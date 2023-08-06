import { Outlet, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (

    <div>
        <nav className="navbar navbar-expand-lg bg-transparent !important fixed-top z-index 999">

        <Link to="/home">particles</Link> {" "}
        <Link to="/artWork">artWork</Link>
        <Link to="/photoCarousel">photoCarousel</Link>
      </nav>
      <Outlet />
    </div>
    
  );
}

export default App;
