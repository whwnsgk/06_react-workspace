/*eslint-disable*/

import './App.css';
import RecipeReviewCard from './Component/Card';
import { Navbar, Nav , Form , FormControl, Container , Row , Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import { useState } from 'react';
import Detail from './Detail';
import { BrowserRouter ,Route , Routes ,Link, Navigate, useNavigate} from 'react-router-dom';
import Home from './Home';
import StaticExample from './Component/Admin';


function App() {
  const [data , setData] = useState(Data); 
  const navigate = useNavigate();
  console.log(data.length);
  console.log(data);



  return (
    <div className="App">
      
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>NSM</Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link onClick={()=>{
              navigate("/")
            }} >Home</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("/admin")
            }}>admin</Nav.Link>
          </Nav>
   
        </Navbar>
      </>
      <Routes>
          <Route path = '/' element = {<Home data = {data}/>}></Route>
          <Route path = '/detail' element = {<Detail data = {data}/>}></Route>
          <Route path = '/admin' element = {<StaticExample data ={data} setData={setData} />}></Route>
      </Routes>

    </div>
  );
}

export default App;



