/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar, Nav , Form , FormControl, Container , Row , Col} from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.js'
import { useState } from 'react';

import {Routes , Route , Link} from 'react-router-dom';

function App() {


  let [shoes] = useState(data) ;
  //console.log(shoes[0].price);

  return (
    
    <div className="App">

      <Button variant="primary">어서오세요</Button>{' '}
      <>
      


        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">하위</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>

      <Link to = "/">홈</Link> <br></br>
      <Link to = "/detail">상세페이지</Link>
      

      <Routes>
        <Route path = "/" element = {<div>
          
              <>
                {<div className='main-bg' /* style={ {backgroundImage : 'url(' + bg + ')'}} */></div>}
                
                <Container>
                      <Row>
                          {
                              shoes.map(function(shoe , i){
                                let imgPath  = shoes[i].imgPath
                                
                                return(
                                <Card shoes = {shoes} i = {i} imgPath = {imgPath} />
                                )
                              })
                          }   
                    </Row>
              </Container>     
            </>
        </div>} />
        <Route path = "/detail" element= {<div>상세페이지임</div>}/>
        <Route path = "/about" element= {<div>about페이지</div>}/>
      </Routes>

     

    </div>
  );
}

function Card(props){
  return (
            <Col sm>
              <img src = {props.imgPath}  width='80%'/>
              <h4>{props.shoes[props.i].title}</h4>
              <p>{props.shoes[props.i].price}</p>
              <p>{props.shoes[props.i].content}</p>
            </Col>
               
  )
}





export default App;
