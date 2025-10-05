import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/movies/Navbar";
import SearchPage from './pages/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { AppProvider } from "./context/AppContext";

function App() {

  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
