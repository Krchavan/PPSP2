import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from './Cards';
import card1 from './../Asset/Card1.jpg';
import card2 from './../Asset/Card2.JPG';
import card3 from './../Asset/Card3.jpg';


function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading" style={{color:"white"}}>
        
        </h1>
        
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={card1}
              isBlog={false}
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={card2}
              isBlog={false}
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={card3}
              isBlog={false}
              
            />
          </Col>
        </Row>
      </Container>
    
    </Container>

  );
}

export default Projects;
