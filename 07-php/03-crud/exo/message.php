<?php

$title = " User Messages ";

require "../../ressources/template/_header.php";

// // Connecting Mysql database to php file using PDO
// $host = "bddsql"; // check the name of the service in the compose.yaml file
// $databaseName = "exo";
// $username = "root"; // default is root but need to be checked if its different
// $password = "root"; // default is root but need to be checked if its different

// $dsn = "mysql:host=$host;dbname=$databaseName";

// $databaseConnection = new PDO($dsn, $username, $password);

$pdo = new PDO('mysql:host=bddsql;dbname=exo', 'root', 'root'); 

// (1 = Maurice)
$userId = 1;

// Fetch messages
$stmt = $pdo->prepare("SELECT * FROM messages WHERE idUser = ?");
$stmt->execute([$userId]);
$messages = $stmt->fetchAll();
// var_dump($messages); here the message is empty 
// to display 
echo "<h1>User message</h1>";

/* You have to insert the data from data_exo in the data base in php admin for it to appear on the screen otherwise if you check the data for message is empty*/
foreach ($messages as $message) {
    echo "<p><strong>Posted on:</strong> " . $message['createdAt'] . "<br>";
    echo "<strong>Message:</strong> " . htmlspecialchars($message['message']) . "</p>";
}




require "../../ressources/template/_footer.php";
?>
