<?php
if(session_status() != PHP_SESSION_ACTIVE)
{
    session_start();

}
$email = $pass = "";
$error = [];

if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login']))
{
    if(empty($_POST["email"]))
    {
        $error["email"] = "Veuillez entrer un email";
    }
    else
    {
        $email = trim($_POST["email"]);
    }
       if(empty($_POST["password"]))
    {
        $error["password"] = "Veuillez entrer un mot de passe";
    }
    else
    {
        $pass = trim($_POST["password"]);
    } //fin vérification password

    if(empty($error))
    {
       $users = file_get_contents("../ressources/users.json");
       $users = json_decode($users, true); 
    }
}

$title = "connexion";
require("../ressources/template/_header.php");
?>
<form action="04-connexion.php" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <span class="error"><?=$error["email"]??"" ?></span>
    <br>
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">
    <span class="error"><?= $error["password"]??"" ?></span>
    <br>
    <button type="submit" name="password">submit</button>
     
</form>