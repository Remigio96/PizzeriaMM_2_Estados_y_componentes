# 🍕 Pizzería Mamma Mia — Hito 2 (React: Estado, Eventos, Router & Auth)

![picza](https://github.com/user-attachments/assets/42311208-2b10-4169-9d00-bab0faf6ef62)

---

## 🍕 Stack

* Vite + React
* React Router v6
* React-Bootstrap + Bootstrap
* Context API (Auth)
* Validaciones controladas con `onChange` / `onBlur` y `isInvalid` / `isValid`

---

## 🎯 Objetivo del Hito

Implementar formularios de **Registro** y **Login** con estado y eventos en React.

✔️ Validación en tiempo real

✔️ Feedback de éxito/error

✔️ Rutas protegidas y redirecciones según flujo (Extra)

---

## 🧭 Rutas

| Ruta        | Página       | Protección | Descripción                                                                               |
| ----------- | ------------ | ---------- | ----------------------------------------------------------------------------------------- |
| `/`         | Home         | Pública    | Header + Cards de pizzas. Muestra un alert fijo de bienvenida si viene de registro/login. |
| `/register` | RegisterPage | Pública    | Formulario con validaciones en tiempo real. Auto-login tras registro y redirección.       |
| `/login`    | LoginPage    | Pública    | Formulario con validaciones. Muestra mensaje de éxito y redirige (por defecto a `/`).     |
| `/profile`  | Profile      | Protegida  | Solo usuarios autenticados (vía ProtectedRoute).                                          |

**ProtectedRoute** redirige a `/login` y conserva `state.from` para volver a la ruta original tras autenticarse.

---

## 🗂️ Estructura

```
├── public
│   └── favicon.ico
└── src
    ├── assets
    │   └── header.jpg
    ├── components
    │   ├── CardPizza.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Home.jsx
    │   ├── LoginPage.jsx
    │   ├── Navbar.jsx
    │   ├── Profile.jsx
    │   └── RegisterPage.jsx
    ├── context
    │   └── AuthContext.jsx
    ├── routes
    │   └── ProtectedRoute.jsx
    ├── App.jsx
    └── main.jsx
```

---

## 🖼️ Vistas

* **Home**: Header con imagen + 3 cards (Napolitana, Española, Pepperoni).
* **Register / Login**: Formularios con feedback visual (valid/invalid).
* **Profile**: Muestra el email del usuario autenticado.

---

## 🏞️ Live Preview
<img width="1716" height="606" alt="image" src="https://github.com/user-attachments/assets/ac044618-416f-4322-afd3-e0374a9802c0" />
<img width="1687" height="711" alt="image" src="https://github.com/user-attachments/assets/071b4a2d-d04e-43b2-b653-8d4ed9158f88" />
<img width="1747" height="902" alt="image" src="https://github.com/user-attachments/assets/059d2702-0482-4d8d-84fb-735e60c7c443" />

