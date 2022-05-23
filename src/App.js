import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddInventory from './pages/AddInventory/AddInventory';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import Blog from './pages/Blog/Blog';
import MyInventory from './pages/MyInventory/MyInventory';
import UpdateInventory from './pages/UpdateInventory/UpdateInventory';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import RequireAuth from './pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/add-inventory" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path="/item/:id" element={<UpdateInventory></UpdateInventory>}></Route>
        <Route path="/manage-inventory" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>

        <Route path="/my-inventory" element={
          <RequireAuth>
            <MyInventory></MyInventory>
          </RequireAuth>
        }></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
