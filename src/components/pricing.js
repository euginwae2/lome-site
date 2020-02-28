import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Pricing = () => (
  <Row style={{marginBottom: '2rem'}}>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>$500 USD/Month</Card.Title>
          <Card.Text>Data Analyst</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card>
    <Card.Body>
      <Card.Title>$100 USD/Month</Card.Title>
      <Card.Text>Vendor Relationship Manager</Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col>
    <Card>
    <Card.Body>
      <Card.Title>$1 USD/Month</Card.Title>
      <Card.Text>Contingent Worker Dashboard</Card.Text>
    </Card.Body>
  </Card>
    </Col>
  </Row>
)

export default Pricing
