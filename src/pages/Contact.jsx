
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
const Contact=()=>{
    return(
        <>
        <div>
        <Container>
            <h3 className='text-center my-5 fw-bolder'>LET GET CONNECTED</h3>
        </Container>
    </div>

    <Container>
    <Form className='border bg-black text-danger fs-3 rounded-2 '>
      <Form.Group as={Row} className="mb-3 my-4 text-center" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='fs-2 fw-bold '>
          Email
        </Form.Label>
        <Col sm="4" className='my-2' >
          <Form.Control  placeholder='Enter your Email'  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className='fw-bold'>
          Company
        </Form.Label>
        <Col sm="4">
          <Form.Control type="password" placeholder="Company Name" />
        </Col>
      </Form.Group>
      <div className="col-12  mx-5 m-auto p-2 ">
    <button class="btn btn-primary" type="submit" data-mdb-ripple-init>Submit form</button>
  </div>
    </Form>
    </Container>
    <br/>

    <Container className='my-5'>
        <Row>
            <Col>
           <h1>
            Contact

           </h1>
           <Col>
           
           <div>
           <a href='https://github.com/Nikeshydv'>GITHUB</a>
           </div>
           </Col>
           
            </Col>
          
            <Col>
            <h1>About</h1>
            </Col>
        </Row>
    </Container>
        </>
    )
}

export default Contact;