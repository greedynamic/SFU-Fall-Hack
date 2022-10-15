import './App.css';
import Login from "./components/Login";
import Menu from './components/Menu';
import EventForm from './components/EventForm';
import Home from './components/Home';

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
