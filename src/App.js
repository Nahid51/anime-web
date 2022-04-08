import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import SingleAnime from './components/SingleAnime/SingleAnime';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singleAnime/:id" element={<SingleAnime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
