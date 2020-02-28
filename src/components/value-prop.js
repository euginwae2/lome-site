import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ValueProp = () => (
  <Card>
    <Row className="justify-content-center"><h2>Why Lome</h2></Row>
    <Row>
    <Col>
      <li>Reduce Administrative Overhead</li>
      <li>Monitor throughput and Quality</li>
      <li>Visualization Tools</li>
      <li>Protect IP</li>
    </Col>
    <Col>
      <li>Collect and track metrics</li>
      <li>Track resource requests</li>
      <li>Powerful auditing tools</li>
      <li>Integrations</li>
    </Col>

    </Row>
  </Card>
)

export default ValueProp
