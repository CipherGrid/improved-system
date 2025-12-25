# Student Speaking Assessment Report Page

This project is a **Student Speaking Assessment Report Page** built as part of a **Full Stack Development assignment**.

The purpose of this assignment is to demonstrate:

- Clean and usable frontend UI
- Basic backend data handling
- Logical and dynamic feedback generation based on score values

This project is a **functional prototype** and is not intended for production use.

---

## Features

- Displays **Overall Speaking Score (out of 9)**
- Displays **Skill-wise Scores**:
  - Pronunciation
  - Fluency
  - Vocabulary
  - Grammar
- **Graphical representation** of scores using progress bars
- **Dynamic descriptive feedback** based on overall score ranges
- Loading spinner while fetching report data
- Responsive and visually clean UI
- Simple backend API using a JSON file as the data source
- Restricted CORS configuration for controlled API access

---

## Tech Stack

### Frontend

- React (Vite)
- JavaScript
- HTML / CSS

### Backend

- Node.js
- Express.js
- JSON file as data source

---

## Project Structure

student-assessment-report/
├── backend/
│ ├── server.js
│ └── studentData.json
├── frontend/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ └── App.jsx
└── README.md

---

## How to Run the Project

### 1. Run Backend

```bash
cd backend
npm install
node server.js
```

### Backend server runs at:

http://localhost:5000

### API endpoint:

GET http://localhost:5000/api/report

### Run Frontend

cd frontend
npm install
npm run dev

### Frontend application runs at:

http://localhost:5173
