
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />



const Home=()=>{
    return(
        <>
        <Carousel className='' >
          
          <Carousel.Item >
          <img src='https://demo.minimog.co/cdn/shop/files/1_de8bb585-d15b-42a1-b88d-1df7c15112ce.jpg?v=1628328726&width=2000' width="1553" height="570" ></img><Carousel.Caption>
            <h3>GYM COLLECTION</h3>
          <h1 id='pack'>DUFFEL <br/>PACK</h1>
         
          <p>Shapes and proportions are for your intellect.I've treated the waistcoat as iit were a corest</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
          <img src='public\Cur1.jpg' width="1553" height="570"></img><Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
          <img src='https://demo.minimog.co/cdn/shop/files/3_f5e11a91-2838-4a1a-b86c-f39b16d25a79.jpg?v=1628328727&width=2000' width="1553" height="570"></img><Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

          </Carousel>



          {/* this is the core collection section*/}

          <h1 id='CORE'>CORE ESSENTIALS</h1>

<div id='card' className='d-flex justify-content-around m-1'>

          <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem', }}>
    <img src='https://demo.minimog.co/cdn/shop/products/1_48b3b1b3-f9cc-4d94-86ec-a7a9ab13c710.jpg?v=1628344463&width=360' width="302" height='300' className=''></img>
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
    <img src='https://demo.minimog.co/cdn/shop/products/16_40892d91-958c-472b-8e78-d89ffa2fee91.jpg?v=1628344059&width=535' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>


    <Card style={{ width: '19rem', marginTop:'8rem', marginLeft:'rem' }}>
    <img src='https://demo.minimog.co/cdn/shop/products/15a_79e380a3-da36-4dd3-889f-0b9cf5962ca4.jpg?v=1628344483&width=535' width="302" height='300'></img>
      <Card.Body>
        <Card.Title>Cross body bag black bagpack</Card.Title>
       
        {/* <Button variant="info">Go somewhere</Button> */}
      </Card.Body>
      <span id='span'>$ 350.00</span><br/>
      <button id='btn'>BUY NOW</button>
    </Card>

    </div>



    {/* this is the  best seller part */}



    <Container>
      <div id='CORE' className='text-center fs-1 ' style={{marginBottom:'3rem'}} >CATEGORY</div>
      <Row style={{marginBottom:'1rem' }} >
        <Col xs={6} md={4}>
          <Image src="https://demo.minimog.co/cdn/shop/files/14_3bf75487-e9a0-4412-8b35-39513e62fcca.jpg?v=1628328827&width=940" thumbnail />
        <h1 id='BAG'>TRAVEL BAG</h1>
        </Col>

        <Col xs={6} md={4}>
          <Image src="https://demo.minimog.co/cdn/shop/files/15_c5226ce4-04cf-46c2-8002-42793d65653e.jpg?v=1628328827&width=940" thumbnail />
          <h1 id='BAG1'>WORK BAG <br/></h1>
          
        </Col>

        <Col xs={6} md={4}>
          <Image src="https://demo.minimog.co/cdn/shop/files/16_8d475b23-3601-41ec-9ef0-7d3b43e89017.jpg?v=1628328827&width=940" thumbnail />
          <h1 id='BAG3'>SLING BAG <br/></h1>
        </Col>
      </Row>

      
    </Container>



<div>

</div>
<div id='CORE' className='text-center fs-1 '>BEST SELLER</div>
<Container  style={{marginBottom:'10rem',marginTop:'8rem'}}>

<Row>
  <Col>
  <Image id='img1' src="https://demo.minimog.co/cdn/shop/files/17_22b870ce-0762-482b-a764-5c176176ee5b.jpg?v=1628328827&width=1066"  width='610' height='260' fluid />  <h1 id='BAG4'>TECH FOLIO</h1><button id='BAG6'>SHOP</button>
 
  </Col>
  <Col> <Image id='img1' src="https://demo.minimog.co/cdn/shop/files/18_04d44ddd-7e83-4c2f-889c-2a2fb888d02c.jpg?v=1628328827&width=1066" width='610' height='260' fluid /> <h1 id='BAG5'>SLIM POUCH</h1></Col>
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

 export default Home;