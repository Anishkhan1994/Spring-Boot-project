import React from "react";
import "./App.css";
import "./App.css";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Allcourses from "./components/AllCourses"
import AddCourses from "./components/AddCouses";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/header";
import Menues from "./components/Menues";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {


  return (
    
     <div>
       <Router>
           <Container>
           <Header/>
           <Row>
             <Col md ={4}>
              <Menues/>
             </Col>
             <Col md ={8}>
             <Routes>
              <Route path="/" Component={Home} exact/>
              <Route path="/add-courses" Component={AddCourses}exact/>
              <Route path="/view-courses" Component={Allcourses} exact/>
              <Route path="/contact" Component={Contact} exact/>
              <Route path="/about" Component={About} exact/>
             </Routes> 
             </Col>
           </Row>
         </Container>
       </Router>  
     </div>
    
    
  );
}

export default App;


