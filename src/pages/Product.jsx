
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from 'react-bootstrap/Dropdown';

import ListGroup from 'react-bootstrap/ListGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Card from 'react-bootstrap/Card';


const Project=()=>{
    return(
        <>
        <Container id='bread'>
<Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="src\pages\Home.jsx">
        About
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Product</Breadcrumb.Item>
    </Breadcrumb>
    </Container>


    <h1 id='bag'>
        <Badge bg="dark">BAG</Badge>
        <hr/>
      </h1>
    
      <Container>
      <Row>
     
    

      
        <aside id='aside'>
            <div>
                <h3> Filters</h3><br/>
                <div><h5>Price</h5>
                $300    to $800</div><br/>

                <div>  
                <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
      Brands
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </div>
            </div>

            <div id='list'>
            <ListGroup as="ul">
      <ListGroup.Item as="li" variant="dark" active>
       <h5>COLLECTION</h5>
      </ListGroup.Item>
      <ListGroup.Item as="li">All Product</ListGroup.Item>
      <ListGroup.Item as="li">
        Best Seller
      </ListGroup.Item>
      <ListGroup.Item as="li">New Arrival</ListGroup.Item>
    </ListGroup></div>


        </aside>
   
      
   



{/* this is the collection of product in the product pages*/}




        <Col>

    <Container>
<div className='d-flex ' id='pp'>
<Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/18_fc531f42-1bb5-473d-9727-dda9291e9ada.jpg?v=1628348581&width=360' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>


    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/07_6632c70a-45fb-4c4e-9a4a-426df38f057e.jpg?v=1628348547&width=535' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

    
    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/10_a6c62b30-137a-4794-a1ea-556fa93de687.jpg?v=1628348556&width=535' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

  
        
   
</div>




<div className='d-flex ' id='pp'>
<Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/11_3ae22d70-bbcc-41c2-bff6-92de68299ee0.jpg?v=1628348559&width=535https://demo.minimog.co/cdn/shop/products/18_fc531f42-1bb5-473d-9727-dda9291e9ada.jpg?v=1628348581&width=360' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>


    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/12a_1c69e0b5-a8fb-4cd4-a57d-b1a1108f2d7f.jpg?v=1628344778&width=535' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

    
    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/20_445f39fb-8841-40a7-9cee-1ded6835e392.jpg?v=1628348587&width=720' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

  
        
   
</div>


<div className='d-flex ' id='pp'>
<Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod4_0ada908c-fcf0-410c-8bc1-4d563932167e.jpg?v=1628344923&width=535' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>


    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/18_fc531f42-1bb5-473d-9727-dda9291e9ada.jpg?v=1628348581&width=360' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

    
    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/18_fc531f42-1bb5-473d-9727-dda9291e9ada.jpg?v=1628348581&width=360' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

  
        
   
</div>

<div className='d-flex  ' style={{marginBottom:'7REM'}} id='pp'>
<Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/11_3ae22d70-bbcc-41c2-bff6-92de68299ee0.jpg?v=1628348559&width=535https://demo.minimog.co/cdn/shop/products/18_fc531f42-1bb5-473d-9727-dda9291e9ada.jpg?v=1628348581&width=360' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>


    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/12a_1c69e0b5-a8fb-4cd4-a57d-b1a1108f2d7f.jpg?v=1628344778&width=535' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

    
    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/20_445f39fb-8841-40a7-9cee-1ded6835e392.jpg?v=1628348587&width=720' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

  
        
   
</div>
        
        
        
        
        
        
        
        
</Container>
        
        
        </Col>
      </Row>
      </Container>

      <hr/>
<Container style={{marginBottom:'3rem'}}>
  <Row>
    <Col><Stack gap={0}>
      <h3>OUR STORE</h3>
      <div className="p-2 fw-bold">About Us</div>
      <div className="p-2 fw-bold">Contact Us</div>
      <div className="p-2 fw-bold">Blog</div>
    </Stack></Col>

    <Col><Stack gap={0}>
    <h3>SERVICES</h3>
      <div className="p-2 fw-bold">Privacy Policy</div>
      <div className="p-2 fw-bold">Refund Policy</div>
      <div className="p-2 fw-bold">Shipping & Return</div>
      <div className="p-2 fw-bold">Term &Condition</div>
    </Stack></Col>


    <Col><Stack gap={0}>
      <h1 className='fw-bolder'>SUPERBAG</h1>
      <div className="p-2 fw-bold">184 Main Rd E, St Albans<br/>
      VIC 3021, Australia</div>
      <div className="p-2 fw-bold">+391 (0)35 2568</div>
     
    </Stack></Col>
    
  </Row>
  
</Container>
        </>
    )
}
export default Project;