import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';
import Home from './Home';
import Address from './Address';
import ConfirmationPage from './ConfirmationPage';
import Notfound from './Notfound';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Images/Logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
// import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <div class="mr-3 ml-3">
            <Navbar bg="warning" expand="md"  >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <li> <Link to={'/'} ><strong>Home &nbsp;</strong></Link></li>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="Dark"></Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>

          </div>
          <img src={Logo} className="img-fluid col-xl-12" />
        </Container>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Address" component={Address} />
          <Route exact path="/ConfirmationPage" component={ConfirmationPage} />
          <Route component={Notfound} />
        </Switch>

      </div>
    </Router>
  );
}


export default App;

