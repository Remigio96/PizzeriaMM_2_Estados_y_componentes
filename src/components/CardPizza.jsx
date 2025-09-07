import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CardPizza({ name, price, ingredients, img }) {
  const formatCLP = (n) => n.toLocaleString("es-CL");

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{ objectFit: "cover", height: 180 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="mb-2">
          <span className="fw-semibold">Ingredientes:</span> {ingredients.join(", ")}
        </Card.Text>
        <h6 className="mt-auto mb-3">Precio: ${formatCLP(price)}</h6>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" className="w-50">Ver más</Button>
          <Button variant="primary" className="w-50">Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
