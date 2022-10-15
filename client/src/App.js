import './App.css';
import Login from "./pages/Login";
import Menu from './components/Menu';
import EventForm from './pages/EventForm';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/add-event' element={<EventForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
