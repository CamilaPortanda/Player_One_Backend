# Player One Backend

Backend API desarrollado con Node.js, Express, Sequelize y PostgreSQL.

---

# Tecnologías utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- JWT Authentication
- bcryptjs
- dotenv
- cors
- nodemon

---

# Instalación del proyecto

## 1. Clonar el repositorio

```bash
git clone https://github.com/CamilaPortanda/Player_One_Backend.git
```

## 2. Entrar al proyecto

```bash
cd Player_One_Backend
```

## 3. Instalar dependencias

```bash
npm install
```

---

# Dependencias instaladas

## Dependencias principales

```bash
npm i express
npm i cors
npm i dotenv
npm i sequelize
npm i pg
npm i pg-hstore
npm i bcryptjs
npm i jsonwebtoken
```

## Dependencias de desarrollo

```bash
npm i nodemon --save-dev
```

---

# Scripts

## Ejecutar servidor en desarrollo

```bash
npm run dev
```

## Ejecutar servidor normal

```bash
npm start
```

---

# Variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

## Ejemplo

```env
PORT=2000
JWT_SECRET=tu_jwt_secret
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

---

# Estructura del proyecto

```txt
Player_One_Backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── node_modules/
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

# Endpoints de la API

| Método | Ruta | Descripción |
|---|---|---|
| GET | /api | Verificar que la API está funcionando |
| POST | /api/auth/registro | Registrar un nuevo usuario |
| POST | /api/auth/login | Iniciar sesión |
| GET | /api/usuarios/perfil | Obtener perfil del usuario autenticado |
| GET | /api/usuarios/bestscores | Obtener mejores scores del usuario |
| GET | /api/usuarios/gamesplayed | Obtener cantidad de juegos jugados |
| GET | /api/products | Obtener productos |
| POST | /api/products | Crear producto |
| PUT | /api/products/:product_id | Actualizar producto |
| GET | /api/industries | Obtener industrias |
| GET | /api/pfps | Obtener todas las PFPs disponibles |
| PUT | /api/pfps/update-user-pfp | Actualizar la PFP del usuario autenticado |
| GET | /api/dashboard/percentage-completed | Obtener porcentaje de finalización por minijuego |
| GET | /api/dashboard/avg-median-time | Obtener tiempo promedio y mediana |
| GET | /api/dashboard/ranking-products | Obtener ranking de productos |
| GET | /api/dashboard/total-product-accesses | Obtener total de accesos a productos |
| GET | /api/dashboard/users-per-industry | Obtener usuarios por industria |
| GET | /api/dashboard/users-per-country | Obtener usuarios por país |
| POST | /api/events/product-view | Registrar vista de productos |
| POST | /api/events/product-click | Registrar clic en producto |
| POST | /api/events/rock-view | Registrar vista relacionada con Rockwell |
| POST | /api/events/game-view | Registrar vista del videojuego |
| POST | /api/events/desc-changed | Registrar cambio de descripción de producto |
| POST | /api/events/product-added | Registrar producto agregado |
| GET | /api/game/get-player-data | Obtener progreso del jugador |
| POST | /api/game/post-attempt | Registrar intento de minijuego |
| POST | /api/game/interaction-event | Registrar evento genérico |

---
# Ejemplos de Body

## Registro

### POST `/api/auth/registro`

```json
{
  "first_name": "Nombre",
  "last_name": "Apellido",
  "email": "correo@empresa.com",
  "password": "123456",
  "phone": "5555555555",
  "industry_id": 1,
  "company": "Rockwell",
  "job_position": "Developer",
  "country": "Mexico",
  "pfp_id": 1
}
```

---

## Login

### POST `/api/auth/login`

```json
{
  "email": "correo@empresa.com",
  "password": "123456"
}
```

---

## Crear producto

### POST `/api/products`

```json
{
  "name_product": "Nuevo Producto",
  "desc_product": "Descripción",
  "html_link": "https://...",
  "image_link": "https://..."
}
```

---

## Actualizar producto

### PUT `/api/products/:product_id`

```json
{
  "desc_product": "Nueva descripción"
}
```

---

## Profile Picture Update

### PUT `/api/pfps/update-user-pfp`

```json
{
  "user_id": 1,
  "pfp_id": 4
}
```

---

## Product Click

### POST `/api/events/product-click`

```json
{
  "product_id": 3
}
```

---

## Rockwell View

### POST `/api/events/rock-view`

```json
{
  "product_id": 3
}
```

---

## Game View

### POST `/api/events/game-view`

```json
{
  "product_id": 3
}
```

---

## Cambio en descripción de producto

### POST `/api/events/desc-changed`

```json
{
  "product_id": 3
}
```

---

## Producto agregado

### POST `/api/events/product-added`

```json
{
  "product_id": 3
}
```

---

## Registrar intento

### POST `/api/game/post-attempt`

```json
{
  "minigameId": 1,
  "completed": true,
  "score": 100,
  "timeBegin": "2026-06-11T20:00:00",
  "timeEnd": "2026-06-11T20:03:00"
}
```

---

## Registrar evento genérico

### POST `/api/game/interaction-event`

```json
{
  "eventTypeId": 1,
  "productId": 2,
  "minigameId": 1,
  "source": "web"
}
```

---

# Autenticación JWT

Las rutas protegidas requieren token JWT.

## Header requerido

```txt
Authorization: Bearer TU_TOKEN
```

---

# Respuesta esperada del login

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "permisos": {
    "dashboard": true,
    "edit_products": false
  }
}
```

---

# Probar API en Postman

## Verificar API

```txt
GET http://localhost:2000/api
```

## Registro

```txt
POST http://localhost:2000/api/auth/registro
```

## Login

```txt
POST http://localhost:2000/api/auth/login
```

## Perfil

```txt
GET http://localhost:2000/api/usuarios/perfil
```

## Best Scores

```txt
GET http://localhost:2000/api/usuarios/bestscores
```

## Games Played

```txt
GET http://localhost:2000/api/usuarios/gamesplayed
```

## Productos

```txt
GET http://localhost:2000/api/products
POST http://localhost:2000/api/products
PUT http://localhost:2000/api/products/:product_id
```

## Industrias

```txt
GET http://localhost:2000/api/industries
```

## Profile Pictures

```txt
GET http://localhost:2000/api/pfps
PUT http://localhost:2000/api/pfps/update-user-pfp
```

## Dashboard

```txt
GET http://localhost:2000/api/dashboard/percentage-completed
GET http://localhost:2000/api/dashboard/avg-median-time
GET http://localhost:2000/api/dashboard/ranking-products
GET http://localhost:2000/api/dashboard/total-product-accesses
GET http://localhost:2000/api/dashboard/users-per-industry
GET http://localhost:2000/api/dashboard/users-per-country
```

## Eventos

```txt
POST http://localhost:2000/api/events/product-view
POST http://localhost:2000/api/events/product-click
POST http://localhost:2000/api/events/rock-view
POST http://localhost:2000/api/events/game-view
POST http://localhost:2000/api/events/desc-changed
POST http://localhost:2000/api/events/product-added
```

## Videojuego

```txt
GET http://localhost:2000/api/game/get-player-data
POST http://localhost:2000/api/game/post-attempt
POST http://localhost:2000/api/game/interaction-event
```

---

# Notas importantes

- Las contraseñas se almacenan cifradas usando bcryptjs.
- La autenticación se realiza mediante JWT.
- Sequelize maneja la conexión y modelos de PostgreSQL.
- nodemon reinicia automáticamente el servidor al detectar cambios.

---

# Autor

Player One Team

- Valeria Rosado
- Camila Portanda
- Anna Castro
- Carlos Arias
- Rodrigo Medina
