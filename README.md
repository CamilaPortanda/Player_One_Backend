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
| GET | /api/pfps | Obtener todas las PFPs disponibles |
| PUT | /api/pfps/update-user-pfp | Actualizar la PFP del usuario autenticado |

---

# Ejemplos de Body

## Registro

### POST `/api/auth/registro`

```json
{
  "first_name": "Nombre",
  "last_name": "Apellido",
  "email": "email@test.com",
  "password": "123456",
  "phone": "8112345678",
  "industry": "Tecnologia",
  "company": "Player One",
  "job_position": "Developer",
  "country": "Mexico",
  "user_type_id": 1
}
```

---

## Login

### POST `/api/auth/login`

```json
{
  "email": "email@test.com",
  "password": "123456"
}
```

---

## Profile Picture Update
### PUT `/api/pfps/update-user-pfp`
```json
{
  "user_id": 1,
  "pfp_id": 2
}
```

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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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

## Profile Pictures

```txt
GET http://localhost:2000/api/pfps
PUT http://localhost:2000/api/pfps/update-user-pfp
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