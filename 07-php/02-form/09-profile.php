<?php

$title = "Profil";
require "../ressources/template/_header.php";
?>

<form action="09-profile.php">
<label for="firstname">Enter you First Name :</label>
<input type="text" name="firstname" id="firstname">
<br>
<label for="bio">Bio :</label>
<input type="text" name="bio" id="bio">
<br>
 <label for="myfile">Choose a file:</label>
    <input type="file" name="myfile" id="myfile">
    <input type="submit" value="Upload" name="upload">
    <span class="error"><?= $error??"" ?></span>

</form>


<?php
require "../ressources/template/_footer.php";
?>