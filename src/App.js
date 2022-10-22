import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import SmoothieHouse from "./pages";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h4> Smoothie house </h4>
          <div className="menu">
              <Link to="/">Home</Link>
              <Link to="/create">Add new Smoothie</Link>
          </div>
      </nav>
        <Routes>
            <Route path="/" element={<SmoothieHouse />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
