import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class NewNavbar extends React.Component {
  render() {
    return (
      <>
        {/* Navbar primary */}
        <Navbar
          className="navbar-horizontal navbar-dark bg-primary"
          expand="lg"
        >
          <Container fluid>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Future Letters
            </NavbarBrand>
            <button
              aria-controls="navbar-primary"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                        Logo
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink to="/write" tag={Link}>
                    Write
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/my-letters" tag={Link}>
                    My Letters
                  </NavLink>
                </NavItem>
                <NavItem>
                    <Media className="align-items-center">
                        <span className="avatar avatar-sm rounded-circle"/>
                        <Media className="ml-2 d-none d-lg-block">
                            <span className="mb-0">
                                Profile
                            </span>
                        </Media>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                    </Media>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NewNavbar;
