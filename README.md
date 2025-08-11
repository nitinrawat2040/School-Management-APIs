# 🏫 School Management API

A Node.js + Express.js + MySQL API that allows users to:

- Add new schools with location coordinates.
- Retrieve a list of schools sorted by proximity to a given location.

This project is designed for learning and demonstration purposes, showcasing RESTful API development, MySQL database integration, and deployment.

---

## 🚀 Features

- **Add School** — Create a new school record with name, address, and latitude/longitude.
- **List Schools by Proximity** — Fetch all schools sorted by nearest to farthest based on a given location.
- **MySQL Integration** — Persistent storage with relational database design.
- **RESTful Endpoints** — Easy integration with frontend or other services.
- **Postman Collection** — For quick API testing.

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Deployment:** Railways (Backend), Railway (MySQL)
- **Tools:** Postman for API testing

---

## 📂 Project Structure

```
SCHOOL MANAGEMENT APIs
│
├── controllers/           # Handles business logic for different features
│ └── schoolController.js  # Controller for school-related operations
│
├── node_modules/          # Installed dependencies (auto-generated)
│
├── routes/                # Application route definitions
│ └── schoolRoutes.js      # Routes for school-related APIs
│
├── utils/                 # Helper functions and reusable utilities
│ └── distance.js          # Utility to calculate distances
│
├── .env                   # Environment variables (e.g., DB URI, API keys)
├── .gitignore             # Git ignore rules
├── db.js                  # Database connection and setup
├── package-lock.json      # Dependency lock file (exact versions)
├── package.json           # Project metadata, scripts, dependencies
├── README.md              # Project documentation
└── server.js              # Main entry point to start the application
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

2️. Install Dependencies

```bash

npm install

```

3️. Setup MySQL Database
Create a MySQL database (Deploy on Railway).
Create schools table:

```sql

CREATE TABLE schools (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
latitude DECIMAL(9,6) NOT NULL,
longitude DECIMAL(9,6) NOT NULL
);

```

Update your DB credentials in src/config/db.js.

4️. Run Locally

```bash

npm start

```

Server will run on: http://localhost:3100

📡 API Documentation
POST /api/schools
Add a new school.

Request Body (JSON)

```json
{
  "name": "St. Joseph's Convent School",
  "address": "Faridabad",
  "latitude": 28.4089,
  "longitude": 77.3178
}
```

Response

```json
{
  "message": "School added successfully"
}
```

GET /api/schools?latitude=28.4089&longitude=77.3178
Get a list of schools sorted by proximity.

Response

```json
[
  {
    "id": 1,
    "name": "St. Joseph's Convent School",
    "address": "Faridabad",
    "latitude": 28.4089,
    "longitude": 77.3178,
    "distance_km": 0
  }
]
```

🧪 Postman Collection
A Postman collection is available in the repository for testing both APIs.

🌐 Deployment
This project is deployed using:

Backend: Railways
Database: Railway MySQL

## 👨‍💻 Author

**Nitin Singh Rawat** <br>
You can connect with me on 👇

- 📬 [Email](nitinrawat2040@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/nitin-singh-rawat-9594b228b)
- 🧑‍💻 [GitHub](https://github.com/nitinrawat2040)
