import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Industries =()=>(
  <div style={{marginBottom: '2rem'}}>
    <Row>
      <Col><Card body>Autonomous Vehicles</Card></Col>
      <Col><Card body>Academia</Card></Col>
      <Col><Card body>Defence</Card></Col>
    </Row>
    <Row>
      <Col><Card body>Healthcare</Card></Col>
      <Col><Card body>Finance</Card></Col>
      <Col><Card body>Retail</Card></Col>
    </Row>
  </div>
)
export default Industries
