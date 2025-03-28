import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArcadeMode from './components/ArcadeMode';
import AsciiMode from './components/AsciiMode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AsciiMode />} />
        <Route path="/arcade" element={<ArcadeMode />} />
      </Routes>
    </Router>
  );
}

export default App;