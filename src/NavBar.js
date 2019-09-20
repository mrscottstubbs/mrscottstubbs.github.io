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
        <Navbar id="top" className="navbar sticky-top" color="dark" dark expand="md">
          <NavbarBrand href="/">
            Scott Stubbs
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#Languages" onClick={this.closeNavbar}>Languages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Academics" onClick={this.closeNavbar}>Academics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Jobs" onClick={this.closeNavbar}>Prior Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#bottom" onClick={this.closeNavbar}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href={resume}>Resume</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default NavBar;
