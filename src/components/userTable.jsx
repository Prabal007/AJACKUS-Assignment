import React from "react";


const UserTable = ({ users, handleEditUser, handleDeleteUser }) => {

  // Define the `UserTable` functional component.
  // It accepts three props:
  // `users` - an array of user objects to display in the table.
  // `handleEditUser` - a function to handle editing a user.
  // `handleDeleteUser` - a function to handle deleting a user.

  return (
    <table className="user-table">
      {/* Render a table with the class `user-table` for styling. */}
      <thead>
        <tr className="user-table-head">
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {/* Define the table body, where user data will be rendered. */}
        {users.map((user) => (
          // Iterate over the `users` array and render a row for each user.
          <tr key={user.id}>
            {/* Each row must have a unique key, using the user's ID here. */}
            <td>{user.id}</td>
            {/* Render the user's ID in the first column. */}
            <td>{user.firstName}</td>
            {/* Render the user's first name in the second column. */}
            <td>{user.lastName}</td>
            {/* Render the user's last name in the third column. */}
            <td>{user.email}</td>
            {/* Render the user's email in the fourth column. */}
            <td>{user.department}</td>
            {/* Render the user's department in the fifth column. */}
            <td>
              {/* Render action buttons for each user in the last column. */}
              <button
                onClick={() => handleEditUser(user)}
                // Attach an onClick event to the edit button to call `handleEditUser`.
                // Pass the current `user` object to the function.
                className="action-button edit"
                // Add a class for styling the edit button.
              >
                Edit
                {/* Button label for editing the user. */}
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                // Attach an onClick event to the delete button to call `handleDeleteUser`.
                // Pass the `id` of the current user to the function.
                className="action-button delete"
                // Add a class for styling the delete button.
              >
                Delete
                {/* Button label for deleting the user. */}
              </button>
            </td>
          </tr>
        ))}
        {/* Close the map function to render all user rows. */}
      </tbody>
    </table>
  );
};

export default UserTable;