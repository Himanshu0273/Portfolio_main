<?php
// Database connection parameters
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_dbname";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Insert data into the database
$sql = "INSERT INTO contact_messages (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
