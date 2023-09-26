import Button from "react-bootstrap/Button";
import COLORS from "../../constant/colors";
import imageHeader from "../../assets/image-header.png";
import { Card } from "react-bootstrap";

const CardBike = () => {
  return (
    <Card style={{ width: "18rem", margin: 10 }}>
      <Card.Img variant="top" src={imageHeader} />
      <Card.Body
        style={{ backgroundColor: COLORS.lightyellow, padding: "1vw" }}
      >
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBike;
