<?php


 if(session_status() !== PHP_SESSION_ACTIVE)
{
    session_start();
    
}


if(isset($_SESSION["logged"]) && $_SESSION["logged"] === true)
{
    
    header("Location: ./09-profile.php");// the .point means staying in the same page as mentioned.
    exit;
}

$username = $pass = "";
$error = [];

if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login']))
{
    if(empty($_POST["username"]))
    {
        $error["username"] = "Please enter correct username ";
    }
    else
    {
        $username = trim($_POST["username"]);
    } 

    if(empty($_POST["password"]))
    {
        $error["password"] = "Please enter a password";
    }
    else
    {
        $pass = trim($_POST["password"]);
    } 
    

    if(empty($error))
    {
      
        $users = file_get_contents("../ressources/newuser.json");
      
        $users = json_decode($users, true);
       
        $user = $users[$username] ?? false;

      
        if($user)
        {
           
            if(password_verify($pass, $user["password"]))
            {
               
                $_SESSION["logged"] = true;
               
                $_SESSION["username"] = $username;
            
              
            } else
            {
                $error["login"] = "Incorrect username or password (password)";
            } 
        }
        else
        {
            $error["login"] = "Incorrect username or password ";
        }
    }
}

$title = "Login";
require "../ressources/template/_header.php";
?>


<form action="08-login.php" method="post">
        <label for="username">Username</label>
        <input type="username" name="username" id="username">
        <span class="error"><?= $error["username"]??"" ?></span>
        <br>
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <span class="error"><?= $error["password"]??"" ?></span>
        <br>
        <button type="submit" name="login">Login</button>
        <span class="error"><?= $error["login"]??"" ?></span>
    </form>


<?php
require "../ressources/template/_footer.php";
?>

