import React from 'react'
import './Style.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// to be able to use bootstrap run this command:
// npm install react-bootstrap bootstrap

function StudentCard({student}) {
  return (
    <div className='size myCards'>    
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={student.image} />
            <Card.Body>
              <Card.Title>{student.name}</Card.Title>
              <Card.Text>
              {student.gpa}
              </Card.Text>
              <Button variant="primary">Grade</Button>
            </Card.Body>
          </Card>
    </div>
  )
}

export default StudentCard