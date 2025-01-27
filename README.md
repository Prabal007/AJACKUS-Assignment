# User Management Application

This project is a **User Management Application** built with **React**. It provides functionality to manage users, including features like viewing, adding, editing, and deleting user details. The application fetches data from a mock API and supports infinite scrolling for seamless navigation through user data.

---

## Features

- **View Users**: Displays user details in a paginated table.
- **Add New Users**: Add user information via a form with validation.
- **Edit Users**: Modify details of an existing user.
- **Delete Users**: Remove a user from the database.
- **Infinite Scrolling**: Automatically loads more users as you scroll.
- **Form Validation**: Ensures valid input for required fields like name, email, and department.

---

## Technologies Used

- **React**: For building the front-end components.
- **Axios**: For making API requests.
- **CSS**: For styling the UI.
- **JSONPlaceholder**: Used as a mock API for testing and data retrieval.

---

## Project Structure

src/
├── components/       # Contains UI components
│   ├── UserForm.js   # Form for adding/editing users
│   ├── UserTable.js  # Displays the list of users in a table
├── services/         # Handles API requests
│   └── api.js        # Functions for fetching, adding, updating, and deleting users
├── App.js            # Main logic of the app
├── App.css           # Application styling
└── index.js          # Entry point for the app


---

## Installation and Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Steps to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/Prabal007/AJACKUS-Assignment.git
   cd user-management
   
2. Install the required dependencies:
-bash
-Copy
-Edit
-npm install

3. Start the development server:
-bash
-Copy
-Edit
-npm start

4. Open your browser and go to:
-arduino
-Copy
-Edit
-http://localhost:3000

5. API Endpoints
The application integrates with the JSONPlaceholder API to perform CRUD operations:

-Fetch Users: GET /users
-Add User: POST /users
-Update User: PUT /users/{id}
-Delete User: DELETE /users/{id}
-API functions are located in src/services/api.js.

6. How to Use
-Adding a User
-Fill in the required fields in the form:
-First Name
-Last Name
-Email
-Department
-Click the Add User button to save the new user.
-Editing a User
-Click the Edit button next to the user in the table.
-Modify the details in the form.
-Click the Update User button to save changes.
-Deleting a User
-Click the Delete button next to the user in the table.
-The user will be removed from the list.
-Infinite Scrolling
-As you scroll down, more users will automatically load and append to the table.

7. Future Enhancements
-Add search and filter capabilities for users.
-Improve styling with advanced design libraries like Tailwind CSS or Material-UI.
-Implement proper authentication for secure API usage.
-Add real-time updates using WebSockets or polling.
-Write unit and integration tests for better code reliability.
