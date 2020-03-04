import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import resume from './images/resume.pdf';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);

    this.state = {
      isOpen: false,
      selected: [true, false, false],
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNavbar() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
        <Navbar id="top" className="navbar sticky-top" color='dark' dark expand="md">
          <NavbarBrand href="/">
            Scott Stubbs
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item target="_blank" href={resume}>Resume</NavDropdown.Item>
                <NavDropdown.Item href="#bottom" onClick={this.closeNavbar}>Contact</NavDropdown.Item>
                
              </NavDropdown>

            </Nav>
    </Collapse>
  </Navbar>
    );
  }
}

export default NavBar;
