import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Recipe = ({title, calories, image, ingrediants}) => {
  return(
    <div>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Calory: {calories}</Card.Text>
          <ListGroup variant="flush">
            Ingrediants that needed:
            {ingrediants.map(ingrediant => (
              <ListGroup.Item>{ingrediant.text}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Recipe;
