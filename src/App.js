import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddInventory from './pages/AddInventory/AddInventory';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/add-inventory" element={<AddInventory></AddInventory>}></Route>
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
