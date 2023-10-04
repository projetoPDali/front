import { Form } from "react-bootstrap";



const SignupForm = () => {
  const inputStyle = {
    
  };

  return (
    <div >
      <Form >
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  style={inputStyle}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  style={inputStyle}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  style={inputStyle}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  style={inputStyle}
                />
              </Form.Group>
            </Form>
    </div>
  );
};

export default SignupForm;
