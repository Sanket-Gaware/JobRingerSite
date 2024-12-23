import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Css/Style.css";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex justify-content-between">
            <img className="logo" src="/Images/logonew.svg" />
            <div className="d-flex gap-2 me-1 btns">
              <Button className="navItem navbtn1" variant="outline-primary">
                Jobseeker Login
              </Button>
              <Button className="navItem navbtn1" variant="outline-warning">
                Employer Login
              </Button>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" className="menu" />
          </Navbar.Brand>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "auto" }}
              navbarScroll
            >
              <Nav.Link className="navItem" href="#action1">
                Jobs
              </Nav.Link>
              <Nav.Link className="navItem" href="#action2">
                Active Employers
              </Nav.Link>
              <Nav.Link className="navItem" href="#action3">
                Job Blogs
              </Nav.Link>

              <NavDropdown
                className="navItem navItemDropdown"
                title="Pricing"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item className="navItemtext" href="#action5">
                  Employer Pricing Plan
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navItemtext" href="#action6">
                  Jobseeker Pricing Plan
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex gap-2">
              <Button className="navItem navbtn" variant="outline-primary">
                Jobseeker Login
              </Button>
              <Button className="navItem navbtn" variant="outline-warning">
                Employer Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
