import React, { useState, useEffect, useRef } from "react";
// Import React and relevant hooks for state and lifecycle management.

import {
  fetchUsersApi,
  addUserApi,
  updateUserApi,
  deleteUserApi,
} from "./services/api";
// Import API service functions for interacting with the backend.

import UserForm from "./components/userForm";
// Import the UserForm component for adding and editing user data.

import UserTable from "./components/userTable";
// Import the UserTable component for displaying the list of users.

import "./App.css";
// Import the CSS file for styling the application.

const App = () => {
  // Define state variables for managing application data and UI behavior.
  const [users, setUsers] = useState([]); // State for storing the list of users.
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  }); // State for managing form inputs for adding or editing users.
  const [isEditing, setIsEditing] = useState(false); // State to track if a user is being edited.
  const [error, setError] = useState(null); // State for handling error messages.
  const [formErrors, setFormErrors] = useState({}); // State for tracking form validation errors.
  const [page, setPage] = useState(1); // State to track the current page for pagination.
  const [loading, setLoading] = useState(false); // State to manage loading indicator.
  const isFirstRender = useRef(true); // A ref to track if it's the component's first render.

  useEffect(() => {
    // Fetch users on the first render and set up an infinite scroll listener.
    if (isFirstRender.current) {
      fetchUsers(); // Fetch the initial list of users.
      isFirstRender.current = false; // Mark the first render as completed.
    }

    const handleScroll = () => {
      // Check if the user has scrolled near the bottom of the page.
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 10 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1); // Increment the page number for loading more data.
      }
    };

    window.addEventListener("scroll", handleScroll); // Add the scroll event listener.
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener.
  }, []); // Empty dependency array ensures this runs only once.

  useEffect(() => {
    // Trigger fetching more users when the page state changes.
    if (page > 1) {
      fetchUsers(); // Fetch additional users when page number increases.
    }
  }, [page]); // Dependency on the `page` state.

  const fetchUsers = async () => {
    // Fetch users from the API.
    setLoading(true); // Set loading to true while the data is being fetched.
    try {
      const data = await fetchUsersApi(page, 10); // Fetch data for the current page with a limit.
      setUsers((prev) => [...prev, ...data]); // Append new users to the existing list.
    } catch {
      setError("Failed to fetch users"); // Handle fetch errors.
    } finally {
      setLoading(false); // Reset the loading state.
    }
  };

  const handleInputChange = (e) => {
    // Handle changes to form input fields.
    const { name, value } = e.target; // Destructure name and value from the event target.
    setForm((prev) => ({ ...prev, [name]: value })); // Update the corresponding form field.
  };

  const validateForm = () => {
    // Validate the form data before submission.
    const errors = {}; // Initialize an empty errors object.
    if (!form.firstName.trim()) errors.firstName = "First Name is required"; // Validate first name.
    if (!form.lastName.trim()) errors.lastName = "Last Name is required"; // Validate last name.
    if (!form.email.trim()) {
      errors.email = "Email is required"; // Check if email is provided.
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Invalid email format"; // Validate email format.
    }
    if (!form.department.trim()) errors.department = "Department is required"; // Validate department.
    setFormErrors(errors); // Set form errors state.
    return Object.keys(errors).length === 0; // Return true if no errors exist.
  };

  const handleAddOrUpdateUser = async () => {
    // Handle adding a new user or updating an existing one.
    if (!validateForm()) return; // Exit if validation fails.

    try {
      if (isEditing) {
        // Update an existing user.
        await updateUserApi(form.id, form); // Send an update request to the API.
        setUsers((prev) =>
          prev.map((user) => (user.id === form.id ? form : user))
        ); // Update the user in the state.
      } else {
        // Add a new user.
        const newUser = await addUserApi(form); // Send a create request to the API.
        setUsers((prev) => [...prev, newUser]); // Add the new user to the state.
      }
      // Reset the form state and errors after successful submission.
      setForm({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });
      setIsEditing(false); // Reset the editing state.
      setFormErrors({}); // Clear form errors.
    } catch {
      setError("Failed to save user"); // Handle errors during save.
    }
  };

  const handleEditUser = (user) => {
    // Handle the editing of a user.
    setForm(user); // Populate the form with the user's data.
    setIsEditing(true); // Set editing state to true.
  };

  const handleDeleteUser = async (id) => {
    // Handle deleting a user.
    try {
      await deleteUserApi(id); // Send a delete request to the API.
      setUsers((prev) => prev.filter((user) => user.id !== id)); // Remove the user from the state.
    } catch {
      setError("Failed to delete user"); // Handle delete errors.
    }
  };

  return (
    <div className="container">
      {/* Main container for the application */}
      <h1 className="header">User Management</h1>
      {/* Application header */}
      {error && <p className="error">{error}</p>}
      {/* Display an error message if any */}
      <UserForm
        form={form}
        formErrors={formErrors}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleSubmit={handleAddOrUpdateUser}
      />
      {/* Render the UserForm component for adding/editing users */}
      <UserTable
        users={users}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      {/* Render the UserTable component for displaying users */}
      {loading && <p className="loading">Loading...</p>}
      {/* Show loading indicator when fetching data */}
    </div>
  );
};

export default App;
// Export the App component as the default export.
