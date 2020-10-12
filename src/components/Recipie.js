import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'



const Recipie=({title,image,calories,ingredients})=>{
    return(
        <div className='justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Ingredients:
                        {ingredients.map(ingredient=>(
                            <li>{ingredient.text}</li>
                        ))}
                    
                    </Card.Text>
                    <Card.Text>Calories: {calories}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Recipie

