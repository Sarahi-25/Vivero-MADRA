# 🌱 Vivero Backend — NestJS + MySQL

## Cómo desplegarlo en Railway (gratis) con MySQL en la nube

---

## PASO 1 — Crear cuenta en Railway
1. Entra a **https://railway.app**
2. Haz clic en **"Start a New Project"**
3. Inicia sesión con tu cuenta de GitHub

---

## PASO 2 — Subir el backend a GitHub
1. Crea un repositorio nuevo en https://github.com/new  
   (nómbralo por ejemplo `vivero-backend`)
2. Dentro de la carpeta `backend-vivero`, abre una terminal y ejecuta:

```bash
git init
git add .
git commit -m "primer commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vivero-backend.git
git push -u origin main
```

---

## PASO 3 — Crear el proyecto en Railway

1. En Railway haz clic en **"New Project"**
2. Selecciona **"Deploy from GitHub repo"**
3. Elige tu repositorio `vivero-backend`
4. Railway detectará que es Node.js y construirá el proyecto automáticamente

---

## PASO 4 — Agregar MySQL en Railway

1. Dentro de tu proyecto Railway, haz clic en **"+ New"**
2. Selecciona **"Database" → "Add MySQL"**
3. Railway creará una base de datos MySQL automáticamente

---

## PASO 5 — Conectar el backend con la BD (variables de entorno)

1. Haz clic en tu servicio del **backend** (no en la BD)
2. Ve a la pestaña **"Variables"**
3. Haz clic en **"Add Variable Reference"** y agrega estas variables:

| Variable      | Valor (copia desde el servicio MySQL de Railway)        |
|---------------|--------------------------------------------------------|
| `DB_HOST`     | El host que Railway te da (ej: `containers-us-west-X.railway.app`) |
| `DB_PORT`     | El puerto (ej: `7432`)                                 |
| `DB_USERNAME` | El usuario (ej: `root`)                               |
| `DB_PASSWORD` | La contraseña generada por Railway                    |
| `DB_NAME`     | `railway` (así se llama por defecto)                  |
| `JWT_SECRET`  | Escribe cualquier texto largo y seguro (ej: `MiVivero2024SuperSecreto!`) |

> 💡 **Truco fácil**: Railway tiene un botón "Add Variable Reference" que inserta automáticamente las variables de la BD MySQL — úsalo para no copiar y pegar a mano.

---

## PASO 6 — Obtener tu URL pública

1. En tu servicio backend, ve a la pestaña **"Settings"**
2. En la sección **"Networking"** haz clic en **"Generate Domain"**
3. Railway te dará una URL como:  
   `https://vivero-backend-production.up.railway.app`

---

## PASO 7 — Actualizar el frontend

En el archivo `vivero-app/src/services/api.js`, cambia la primera línea:

```js
const BASE_URL = 'https://vivero-backend-production.up.railway.app';
```

---

## Desarrollo local (tu PC con MySQL Workbench)

1. Copia el archivo de ejemplo y edítalo:
```bash
cp .env.example .env
```

2. Abre `.env` y pon tu contraseña de MySQL Workbench:
```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=TU_CONTRASEÑA
DB_NAME=pi_db
JWT_SECRET=cualquier_texto_secreto
```

3. Crea la base de datos en MySQL Workbench:
```sql
CREATE DATABASE IF NOT EXISTS pi_db;
```

4. Instala dependencias y corre el servidor:
```bash
npm install
npm run start:dev
```

El backend crea las tablas automáticamente gracias a `synchronize: true`.

---

## Cómo encontrar tu contraseña de MySQL Workbench

Si no recuerdas la contraseña de MySQL:

**Windows:**
1. Abre MySQL Workbench
2. Haz clic en el ícono ⚙️ de tu conexión
3. Ve a **"Store in Vault"** — ahí puedes ver/cambiar la contraseña

**O resetearla desde la terminal:**
```bash
# Windows (como administrador)
net stop mysql
mysqld --skip-grant-tables
# En otra terminal:
mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED BY 'nueva_contraseña';
FLUSH PRIVILEGES;
```

---

## Endpoints disponibles

| Método | Ruta            | Descripción              |
|--------|-----------------|--------------------------|
| POST   | /auth/login     | Iniciar sesión           |
| POST   | /users          | Registrar nuevo usuario  |
| GET    | /products       | Listar plantas           |
| POST   | /products       | Crear planta             |
| PATCH  | /products/:id   | Actualizar planta/stock  |
| DELETE | /products/:id   | Eliminar planta          |
| GET    | /sales          | Historial de ventas      |
| POST   | /sales          | Registrar venta          |
