import React, {Component} from 'react';
// import logo from './components/images/Untitled-2.png';
import junior from '../components/images/guyLewis2.png';
import background from '../components/images/background.jpeg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { /*Media, Button, Form, FormControl, Col, Card,*/  Toast,Image, Container} from 'react-bootstrap';
// import {FaInstagram, FaFacebook, FaSoundcloud} from 'react-icons/fa';
import './PagesBio.css';

 class Bio extends Component {   
     render(){
     return(       
          
    
       <body className="bioBackground">
         <Container className='App-header'>
         <Toast className="Card">
    <Toast.Header>
      
      <strong className="mr-3">DJ Guy Lewis</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>New things are coming, and perfection takes time. Check back soon. </Toast.Body>
  </Toast>
  <Toast>
    <Toast.Header>
      <strong className="mr-auto">Anonymous</strong>
      <small>2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>When is your next appearance or podcast coming!?</Toast.Body>
  </Toast>
</Container>
       </body>
            
            
              
       );
     
     }
 }
        
export default Bio;