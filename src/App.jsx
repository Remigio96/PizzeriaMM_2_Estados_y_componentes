import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import Container from "react-bootstrap/Container";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <Container fluid className="px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}
