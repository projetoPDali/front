import { Card, Container, Button } from "react-bootstrap";
import COLORS from "../../constant/colors";

const CardText = {
  margin: 0,
};

const InfoBike = () => {
  return (
    <Container fluid>
      <Card
        style={{
          borderRadius: 0,
          color: COLORS.black,
          borderWidth: 0,
        }}
      >
        <Card.Body style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)" }}>
          <Card.Header style={{ backgroundColor: "white", paddingLeft: 0 }}>
            {" "}
            <Card.Title>Informações da Bicicleta</Card.Title>
          </Card.Header>
          <Card.Text style={CardText}>Marca:</Card.Text>
          <Card.Text style={CardText}>Aro:</Card.Text>
          <Card.Text style={CardText}>Tamanho:</Card.Text>
          <Card.Text style={CardText}>Material:</Card.Text>
          <Card.Text style={CardText}>Suspensão:</Card.Text>
          <Card.Text style={CardText}>Marcha:</Card.Text>
          <Card.Text style={CardText}>Gênero:</Card.Text>
        </Card.Body>
      </Card>
      <h3 style={{ marginTop: 30}}>Descrição</h3>
      <p style={{ color: COLORS.gray}}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur ma Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut al
      </p>
      <Button
  className="col-5 mx-auto d-block"
  style={{
    width: "15vw",
    height: "4vw",
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    fontSize: 24,
    fontWeight: "bold",
    padding: "0.3vw 0.9vw", // Adjusted padding
    marginTop: "4vw",
    marginLeft: "10vw",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  Alugar
</Button>
    </Container>
  );
};

export default InfoBike;
