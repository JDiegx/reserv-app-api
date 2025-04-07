# 📅 API de Reserv-APP

Esta es una API REST construida con **Node.js + Express** que permite realizar reservas de zonas comunes en una unidad residencial. Las reservas se almacenan en un archivo local en formato JSON.

---

## 🚀 Requisitos

- Node.js (versión 14 o superior)
- npm (Node Package Manager)

---

## 📦 Instalación y configuración

### 1. Clonar el repositorio

Primero, clona el repositorio y accede a la carpeta del proyecto:

```bash
git clone https://github.com/tu-usuario/reservas-api.git
cd reservas-api
```

### 2. Instalar dependencias

Dentro del proyecto, instala las dependencias necesarias:

```bash
npm install
```

### 3. Crear carpeta y archivo para las reservas

Dentro del proyecto, **crea manualmente una carpeta llamada `data`**. Luego, dentro de esa carpeta, **crea un archivo llamado `reservations.json`**.

Asegúrate de que el archivo contenga un arreglo vacío (`[]`), así:

**`data/reservations.json`**:
```json
[]
```

Este archivo será donde se guardarán todas las reservas.

---

## ▶️ Ejecutar la API localmente

Una vez hayas creado el archivo correctamente, puedes iniciar la API con:

```bash
node index.js
```

La API estará disponible en:

```
http://localhost:3000
```

---

## 🧠 Endpoints disponibles

### 🔹 Crear una reserva

**POST** `/reservar`

**Cuerpo (body)** en formato JSON:
```json
{
  "zona": "Piscina",
  "dia": "2025-04-10",
  "hora": "10:00",
  "nombre": "Juan Pérez",
  "contacto": "3001234567",
  "email": "juan@example.com"
}
```

**Respuestas posibles**:
- `201 Created`: Reserva realizada con éxito.
- `400 Bad Request`: Faltan datos requeridos.
- `409 Conflict`: El horario ya ha sido reservado.

---

### 🔹 Consultar disponibilidad

**GET** `/disponibilidad/:zona/:dia`

**Ejemplo**:
```
/disponibilidad/Piscina/2025-04-10
```

**Respuesta**:
```json
{
  "dia": "2025-04-10",
  "zona": "Piscina",
  "ocupados": ["10:00", "11:00"]
}
```

---

## 🛑 Evita subir archivos de datos al repositorio

Agrega la carpeta `data/` al archivo `.gitignore` para que no se suba al repositorio:

**`.gitignore`**
```
node_modules/
data/
```

---

## 📁 Estructura del proyecto recomendada

```
reservas-api/
│
├── data/
│   └── reservations.json
├── index.js
├── package.json
└── .gitignore
```

(Opcionalmente puedes modularizar más adelante en carpetas como `routes`, `controllers`, y `utils`.)

---

## 🧪 Pruebas

Puedes probar los endpoints utilizando herramientas como:

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (extensión de VS Code)
- curl desde la terminal

---

## 📬 Contacto

¿Tienes dudas o sugerencias? Escríbeme a: `tu-email@ejemplo.com`
