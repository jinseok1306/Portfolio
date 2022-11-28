import React, { useState } from "react";
import "../css/Header.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Container,
  Row,
  Col
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const setIsClose = () => setIsOpen(false);

  return (
    <div id="menu">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Navbar light expand="md" className="nav" fixed="top">
              <Col xs={{ size: 1 }} sm={{ size: 1}} md={{ size: 1, offset : 1 }}>
                <NavbarBrand href="">
                  <img src={process.env.PUBLIC_URL + "/assets/img/profile.jpeg"} alt="프로필 사진" className="mainImg" />
                  <span className="mainTitle">  Jinseok Park</span>
                </NavbarBrand>
              </Col>
              <Col xs={3} sm={2} md={{ size: 1, offset: 1 }}>
                <NavbarToggler onClick={toggle} navbar />
              </Col>
              <Collapse isOpen={isOpen} navbar className="navbar-collapse">
                <Nav navbar className="navbar-ul">
                  <NavItem className="navItem">
                    <NavLink href="#home" onClick={setIsClose}>HOME</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#about" onClick={setIsClose}>ABOUT</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#skills" onClick={setIsClose}>SKILLS</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#projects" onClick={setIsClose}>PROJECTS</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
              <Col xs={{ size: 1 }} sm={{ size: 1}} md={{ size: 1, offset : 1 }}>
                <NavbarBrand href="https://jinseok-park.notion.site/37cf6dd814f749a5b51650e5d6f1b80d">
                  <img src={process.env.PUBLIC_URL + "/assets/img/Notion.png"} alt="Notion 링크" className="mainImg" />                  
                </NavbarBrand>
                <NavbarBrand href="https://github.com/jinseok1306">
                  <img src={process.env.PUBLIC_URL + "/assets/img/Github.jpg"} alt="Github 링크" className="mainImg" />                  
                </NavbarBrand>
              </Col>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;