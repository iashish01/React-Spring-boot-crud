# Student Management System

A full-stack application built with **Spring Boot** (backend), **React** (frontend), and **MySQL** (database) for managing student records.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup (Spring Boot)](#backend-setup-spring-boot)
- [Frontend Setup (React)](#frontend-setup-react)
- [Running the Application](#running-the-application)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Technologies Used

- **Backend**: Spring Boot, Spring Data JPA, RESTful API
- **Frontend**: React, Axios
- **Database**: MySQL
- **Others**: Maven (for backend), npm (for frontend)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Java** (JDK 11 or higher)
- **Maven** (for building the Spring Boot app)
- **Node.js** and **npm** (for React frontend)
- **MySQL** (or any other MySQL-compatible database)

## Installation

### Clone the repository:

```bash
git clone https://github.com/iashish01/React-Spring-boot-crud.git
cd React-Spring-boot-crud
```

## Backend Setup (Spring Boot)
# Navigate to the backend directory:

bash
Copy
Edit
cd backend
Configure application properties: In src/main/resources/application.properties, configure the MySQL database connection:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
Build and run the Spring Boot application: You can use Maven to build the application:

bash
Copy
Edit
mvn clean install
mvn spring-boot:run
This will start the Spring Boot backend on http://localhost:8080.

## Frontend Setup (React)
# Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install the dependencies: Run the following command to install all the required packages using npm:

bash
Copy
Edit
npm install
Start the React development server: Run the following command to start the React app:

bash
Copy
Edit
npm start
This will run the frontend application on http://localhost:3000.

Running the Application
Once both the backend (Spring Boot) and frontend (React) are running, you can navigate to http://localhost:3000 in your browser. The frontend will make API calls to the Spring Boot backend, and you can interact with the student records.

# Database Setup
Create a MySQL Database: If you haven’t already, create a MySQL database named studentdb (or change the name in the application.properties file):

sql
Copy
Edit
CREATE DATABASE studentdb;
Create the Student Table: If you are using the default spring.jpa.hibernate.ddl-auto=update, Spring Boot will automatically generate the required tables based on your JPA entities. If not, you can create the student table manually:

API Endpoints
Here are the key API endpoints for the backend:

1. Get All Students
Endpoint: GET /api/students
Description: Retrieves all students.
Response: List of students.
2. Get Student by ID
Endpoint: GET /api/students/{id}
Description: Retrieves a student by their ID.
Response: Student details.
3. Add New Student
Endpoint: POST /api/students
Description: Adds a new student.
Request Body:
json
Copy
Edit
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com"
}
4. Update Student
Endpoint: PUT /api/students/{id}
Description: Updates a student's information.
Request Body:
json
Copy
Edit
{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane.doe@example.com"
}
5. Delete Student
Endpoint: DELETE /api/students/{id}
Description: Deletes a student by ID.

