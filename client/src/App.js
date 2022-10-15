import './App.css';
import Login from "./pages/Login";
import Menu from './components/Menu';
import EventForm from './pages/EventForm';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">\<Router>
      <Menu />
      <Routes>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route path='/add-event' component={EventForm} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
