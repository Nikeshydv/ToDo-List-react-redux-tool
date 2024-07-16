import { Container, Nav, Navbar, } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







const Layout=()=>{
    return(
        <>

      
<Navbar bg="dark" data-bs-theme="dark" className="p-3  ">
        <Container>
          <Navbar.Brand><Link id="home" to="home"><h1>SUPERBAG</h1></Link></Navbar.Brand>
          <Nav className="me-auto text-decoration-none text-white" id="Nav">
          <Link class="nav" to="home">Home</Link>
                <Link class="nav" to="experience">About</Link>
                <Link class="nav" to="project">Product</Link>
                <Link class="nav" to="Contact">Contact</Link>
          </Nav>
          <input id="input" className="p-1 rounded-2" type="search" placeholder="TypeQuery" />
          <div  id="search">Search</div>
        </Container>
      </Navbar>

           
            
      <Row>
        <Col>
         <Outlet/></Col>
      </Row>
   

        
        </>
    )
}


export default Layout;

