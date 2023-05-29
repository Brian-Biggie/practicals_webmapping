<?php
// Connect to the PostgreSQL database
$db = new PDO('pgsql:host=localhost;dbname=postgres', 'postgres', '199725');

// Fetch data from the database
$query = $db->query('SELECT id, name_2 FROM ukadmn3');
$data = $query->fetchAll(PDO::FETCH_ASSOC);

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
