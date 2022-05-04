import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
