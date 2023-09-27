import { Container, Row, Col, Form } from 'react-bootstrap';


const CadastroBike = () => {
  return (
    <Container>
    <Row>
      {/* Coluna para a imagem (será ocultada em telas menores) */}
      <Col md={5} className="d-none d-md-block">
        <div>teste</div>
      </Col>

      
      <Col xs={12} md={7}>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
      </Col>
    </Row>
  </Container>
  )
};

export default CadastroBike;
