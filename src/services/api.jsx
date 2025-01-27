import axios from "axios";
// Import the Axios library for making HTTP requests.

const apiUrl = "https://jsonplaceholder.typicode.com/users";
// Define the base URL for the API. This URL points to a placeholder API for demonstration purposes.

// Fetch users from the API with pagination.
export const fetchUsersApi = async (page, limit) => {
  // Export a function `fetchUsersApi` for fetching users.
  // It accepts `page` and `limit` parameters for pagination.

  const response = await axios.get(apiUrl, { params: { _page: page, _limit: limit } });
  // Use Axios to send a GET request to the API.
  // Include query parameters `_page` and `_limit` for pagination.

  return response.data;
  // Return the data from the API response.
};

// Add a new user to the database.
export const addUserApi = async (user) => {
  // Export a function `addUserApi` for adding a new user.
  // It accepts a `user` object as a parameter.

  const response = await axios.post(apiUrl, user);
  // Use Axios to send a POST request to the API.
  // The `user` object is sent as the request payload.

  return response.data;
  // Return the data from the API response, representing the added user.
};

// Update an existing user's data.
export const updateUserApi = async (id, user) => {
  // Export a function `updateUserApi` for updating a user's data.
  // It accepts `id` (the user's ID) and a `user` object with updated fields.

  const response = await axios.put(`${apiUrl}/${id}`, user);
  // Use Axios to send a PUT request to the API.
  // Append the user's ID to the API URL.
  // The `user` object is sent as the request payload.

  return response.data;
  // Return the data from the API response, representing the updated user.
};

// Delete a user from the database.
export const deleteUserApi = async (id) => {
  // Export a function `deleteUserApi` for deleting a user.
  // It accepts `id` (the user's ID) as a parameter.

  await axios.delete(`${apiUrl}/${id}`);
  // Use Axios to send a DELETE request to the API.
  // Append the user's ID to the API URL to specify which user to delete.
};
