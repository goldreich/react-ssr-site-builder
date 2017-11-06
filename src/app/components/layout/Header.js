import React from "react";
import styled from "styled-components";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const Logo = styled(
  ({className, href, children}) => (
    <a className={className + ' navbar-brand'} href={href}>{children}</a>
  )
)`
  color: #fff !important;
`;

const renderMenu = (nav) => {
  return nav.map((item, i) => {
    // NavItem:
    if (item.text) {
      return <NavItem key={i} eventKey={i + 1} href={item.href}>{item.text}</NavItem>
    }
    // NavDropdown
    if (item.label) {
      const dropdownItems = item.dropdown.map((dItem, dI) => {
        return <MenuItem key={dI} 
          eventKey={(i + 1) + '.' + (dI + 1)}
          href={dItem.href}
        >
          { dItem.text }
        </MenuItem>
      });
      return <NavDropdown key={i} eventKey={i + 1} title={item.label} id={'nav-dropdown-' + i}>
        { dropdownItems }
      </NavDropdown>
    }
  });
}

const Header = (props) => { 
  const { menu } = props;

  // Nav left:
  const navLeft = renderMenu(menu.leftNav);

  // Nav right:
  const navRight = renderMenu(menu.rightNav);

  return (
    <Navbar { ...props }>
      <Navbar.Header>
        <Logo href="testtest">RSSB</Logo>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          { navLeft }
        </Nav>
        <Nav pullRight>
          { navRight }
        </Nav>
      </Navbar.Collapse>  
    </Navbar>
  )
};

const styledHeader = styled(Header)`
  border-radius: 0px;
`;

export default styledHeader;