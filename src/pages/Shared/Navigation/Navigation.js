import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import useFirebase from '../../../hooks/useFirebase';


const Navigation = () => {
  const [users, setUsers] = useState({});
  // console.log(users)
  const logout = () => {
    signOut(auth);
  };
  const { user, logOut } = useFirebase();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className='text-white text-decoration-none' to="/">Electronics Hub</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-decoration-none text-light mx-2' to="/add-inventory">Add Inventory</Link>
            <Link className='text-decoration-none text-light mx-2' to="/manage-inventory">Manage Invenotory</Link>
            <Link className='text-decoration-none text-light mx-2' to="/my-inventory">My Inventory</Link>
            <Link className='text-decoration-none text-light mx-2' to="/blog">Blog</Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
          </Nav>
          {
                            user && <img src={user.photoURL} alt="user" className='rounded-circle ' ></img>

                        }
          <Nav>

            {
              user?.uid
              ?
              <Button onClick={logOut}>Sign out</Button>
              :
              <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>

              // users?.uid 
              // ?
              //   <button onClick={logout} className='btn btn-primary rounded-pill'>logout</button>
              //   :
              //   <Link className='text-decoration-none text-light mx-2 btn btn-primary rounded-pill' to="/sign-in">Sign In</Link>
            }
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;