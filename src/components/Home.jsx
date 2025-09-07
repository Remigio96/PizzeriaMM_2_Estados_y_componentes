import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const welcome = location.state?.welcome;

  useEffect(() => {
    if (welcome) {
      const t = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [welcome, navigate, location.pathname]);

  return (
    <main>
      {/* Mensaje de bienvenida solo si venimos de un registro */}
      {welcome && (
  <Alert
    dismissible
    variant="success"
    className="position-fixed top-0 start-50 translate-middle-x shadow"
    style={{ zIndex: 1080, maxWidth: 640, width: "calc(100% - 2rem)", marginTop: "0.75rem" }}
    onClose={() => navigate(location.pathname, { replace: true, state: {} })}
  >
    ¡Bienvenido{user?.email ? `, ${user.email}` : ""}! 🎉
  </Alert>
)}

      <Header />

      <Container className="my-4">
        <Row className="g-3">
          <Col xs={12} md={6} lg={4}>
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            />
          </Col>

          <Col xs={12} md={6} lg={4}>
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            />
          </Col>

          <Col xs={12} md={6} lg={4}>
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
