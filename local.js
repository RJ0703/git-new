function handleFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Create user object
  const user = {
    username,
    email,
    phone,
  };

  // Get existing users from local storage or initialize an empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Add the new user to the array
  users.push(user);

  // Save the updated user array back to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Update the user list on the page
  updateUserList(users);

  // Clear the form fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function updateUserList(users) {
  const userList = document.getElementById("userList");

  // Clear existing list items
  userList.innerHTML = "";

  // Create and append list items for each user
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
    userList.appendChild(listItem);
  });
}

// Load existing users on page load
document.addEventListener("DOMContentLoaded", () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  updateUserList(users);
});

// Export functions for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    handleFormSubmit,
    updateUserList,
  };
}
