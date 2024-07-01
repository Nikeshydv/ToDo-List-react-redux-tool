import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';





const Layout=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
        
         <Link className="fs-3 text-white p-2 text-decoration-none" to="home">Home</Link>
<Link className="fs-3 text-white my-auto p-2  text-decoration-none " to="about">About</Link>
<Link className="fs-3 text-white my-auto p-2  text-decoration-none" to="service">Service</Link>
<Link className="fs-3 text-white my-auto p-2  text-decoration-none" to="contact">Contact</Link>
<Form className="d-flex">
  <div>
<Dropdown  >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>




          </Container>
</Navbar>
<Outlet/>
<hr size="4" color="info"/>
www.company.com-2024 
        </>
    )
}

export default Layout;


