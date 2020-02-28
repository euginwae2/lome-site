import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const CallToAction = () => (
  <Form style={{marginBottom: '2rem', marginTop: '2rem'}}>
    <Form.Group as={Row}>
      <Form.Label column sm={2}>Request a demo</Form.Label>
      <Col sm={8}>
        <Form.Control type="email" placeholder="Email" />
      </Col>
      <Col sm={2}>
      <Button type="submit">Submit</Button>
      </Col>
    </Form.Group>
  </Form>
)
export default CallToAction
