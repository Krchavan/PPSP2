import React from "react";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card style={{width:'20rem', height:'9rem'}}  >
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  style={{width:'20rem', height:'10rem' }} />
      <Card.Body>
        
       
      </Card.Body>
    </Card>
  );
}
export default Cards;
