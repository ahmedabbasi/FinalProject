import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Brand, Header, Toggle, Collapse, Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';


const MyNavbar = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Newsology</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/">
          Home
  </NavItem>
        <NavItem eventKey={2} href="/sports">
          Sports
      </NavItem>
        <NavItem eventKey={3} href="/business">
          Business
      </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/saved">
          Saved News
      </NavItem>
        <NavItem eventKey={2} href="#">
          Link Right
      </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)



export default MyNavbar;


