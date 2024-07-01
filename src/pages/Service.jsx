import { Container } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Outlet } from "react-router-dom";
const Service=()=>{
    return(
        <>
     

<div className='d-flex p-5 m-2 gap-5 justify-content-center'>
<Card style={{ width: '18rem' }}>
      <Card.Img className='my-4' variant="top" src="https://www.bbvaapimarket.com/wp-content/uploads/2014/09/115a8_html_strong.jpg" />
      <Card.Body>
        <Card.Title className='my-'></Card.Title>
        <Card.Text>
        "Certified in HTML by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        
        </Card.Text>
        <Button variant="primary">HTML Project</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969" />
      <Card.Body>
        <Card.Title className='my-'></Card.Title>
        <Card.Text>
        "Certified in JAVASCRPIT by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        </Card.Text>
        <Button variant="primary">JAVASCRPIT Project</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png" />
      <Card.Body>
        <Card.Title className='my-'></Card.Title>
        <Card.Text className='my-3'>
        "Certified in REACT/BOOTSTRAP by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        </Card.Text>
        <Button variant="primary">REACT Project</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img src="https://developer-blogs.nvidia.com/wp-content/uploads/2020/06/C-standard-parallelism-3x2-blog-format.png" />
      <Card.Body>
        <Card.Title className=''></Card.Title>
        <Card.Text className='my-4'>
        "Certified in HTML by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        </Card.Text>
        <Button variant="primary">CPP Project</Button>
      </Card.Body>
    </Card>

    
    </div>


<table>
  <tr>
    <td width="20%" height="200">
      <Link className="text-black " to="Compnayservice">Company Service</Link><br/>
      <Link className="text-black" to="productservice">Product Service</Link><br/>
      <Link className="text-black" to="sellservice">Sell Service</Link><br/>

    </td>

    <td>
      <Outlet/>
    </td>
  </tr>
</table>


        </>
    )
}

export default Service;