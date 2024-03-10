import logo from './logo.svg';
import './App.css';
import Entering_page from './components/Entering_page';
import Detailed_page from './components/Detailed_page';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
    <Route exact path='/' element={<Entering_page />}/>
    <Route path="/Detailed_page" element={<Detailed_page />} />
    </Routes>
  </Router>
  );
}

export default App;
