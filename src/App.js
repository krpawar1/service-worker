import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Users from './Users';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >Service Worker App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
