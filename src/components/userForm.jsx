import React from "react";


const UserForm = ({
  form,
  formErrors,
  isEditing,
  handleInputChange,
  handleSubmit,
}) => {

  // Define the `UserForm` functional component.
  // It accepts the following props:
  // `form` - an object representing the current form state.
  // `formErrors` - an object containing error messages for form validation.
  // `isEditing` - a boolean indicating whether the form is in edit mode.
  // `handleInputChange` - a function to handle changes to form inputs.
  // `handleSubmit` - a function to handle form submission.

  return (
    <div className="form-container">
      <h2 className="form-header">
        {/* Display the form header, which changes based on `isEditing`. */}
        {isEditing ? "Edit User" : "Add User"}
        {/* Show "Edit User" if in edit mode, otherwise "Add User". */}
      </h2>
      <div className="form-group">
       
       
      <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleInputChange}
          className="input"
          // Input for the user's first name.
          // Binds the value to `form.firstName`.
          // Calls `handleInputChange` when the input value changes.
        />
        {formErrors.firstName && (
          <p className="error-text">{formErrors.firstName}</p>
          // If there's a validation error for `firstName`, display it as an error message.
        )}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleInputChange}
          className="input"
          // Input for the user's last name.
          // Binds the value to `form.lastName`.
          // Calls `handleInputChange` when the input value changes.
        />
        {formErrors.lastName && (
          <p className="error-text">{formErrors.lastName}</p>
          // If there's a validation error for `lastName`, display it as an error message.
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          className="input"
          // Input for the user's email.
          // Binds the value to `form.email`.
          // Calls `handleInputChange` when the input value changes.
        />
        {formErrors.email && (
          <p className="error-text">{formErrors.email}</p>
          // If there's a validation error for `email`, display it as an error message.
        )}

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleInputChange}
          className="input"
          // Input for the user's department.
          // Binds the value to `form.department`.
          // Calls `handleInputChange` when the input value changes.
        />
        {formErrors.department && (
          <p className="error-text">{formErrors.department}</p>
          // If there's a validation error for `department`, display it as an error message.
        )}
      </div>
      <button onClick={handleSubmit} className="button">
        {/* Render a button to submit the form. */}
        {isEditing ? "Update User" : "Add User"}
        {/* Show "Update User" if in edit mode, otherwise "Add User". */}
      </button>
    </div>
  );
};

export default UserForm;