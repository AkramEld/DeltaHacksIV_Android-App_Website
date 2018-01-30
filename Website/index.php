<?php

if(isset($_POST['submit']))
{
  $home = $_POST['home'];
  $home = str_replace(" ", "%20", $home);
  $destination = $_POST['destination'];
  $destination = str_replace(" ", "%20", $destination);

  $url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=AIzaSyC7ZCMYbXM7VEDeJFXsy57MEB7buQxOhso&origins=".$home."&destinations=".$destination;
  $data = file_get_contents($url);
  $finaldata = json_decode($data, true);
  $finaldata = $finaldata["rows"][0]["elements"][0]["duration"]["text"];
  $rest = substr($finaldata, 0,-5);
  $rest=(int)$rest;



  // $file = fopen("test.txt", "w+") or die("file not open");
  // $s = $home." \r\n".$destination;
  // fputs  ($file,$s) or die("Data did not write");
  // fclose($file);

  //shell_exec("C:/xampp/htdocs/demo/run.py");

}
?>

<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>AlarmSafe </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script src="main.js"></script>

</head>

<body style=" background-color: lightblue;">
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: black;">
  <div class="container">
    <img IMG HEIGHT="55" WIDTH="55"  src="icon.jpg" alt="..." class="img-thumbnail" id="icon">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">

      </ul>

    </div>
  </div>
</nav>

<form>

  <input hidden type="text" name="user" id="user" value="<?php echo $rest; ?>"/>




</form>

  <div id ="container">
  </br>
  <div style="margin-top:50px; color:blue; font-family:verdana; font-family:verdana; font-size:30px;">

  <p><center>Get to Work.. On time!</center></p>


  </div>

</br></br></br></br></br></br></br></br></br></br>
<div style="margin-left:670px;">
  <label for="usr" > <b>Time of Arrival</b></label>
</div>

    <div class = "row" style="marin-left:50px">
      <div class = "col-md-2">
      </div>
      <div class = "col-md-2">
        <div class="form-group">
      <label for="usr"> <b>Home Address:</b></label>
      <form action = "#" method = "post">
      <input type="text" class="form-control" id="home" name="home">
    </div>

      </div>

      <div class = "col-md-2">
        <label for="usr"><b>Destination:</b></label>
        <input type="text" class="form-control" id="destination" name="destination">
      </div>

      <div class = "col-1">
        <label for="usr" cen><b> Hours</b></label>
        <input type="text" class="form-control" id="hours" name="hours">

      </div>
      <div class = "col-1">
          <label for="usr"><b>Minutes</b></label>
          <input type="text" class="form-control" id="mins" name="mins">

      </div>

      <div class = "col-md-2">
        <label for="usr"><b>Time to Get Ready:</b></label>
        <input type="text" class="form-control" id="readytime" name="readytime">

      </div>
    </div>


  <div id="entry" style="margin-left:350px ">
<br>
  <button type="submit" class="btn btn-primary" name="submit" id="submit" onclick="myFunction()">Set Information</button>

  <button hidden type="submit" class="btn btn-primary" name="submit2" id="submit2" onclick="playMusic()" style="margin-left:310px ">Save Time</button>

  </div>
</form>


</div>
<div class="form-group row">

<div id="entry" style="margin-left:550px " class="col-xs-2">
  <br><br><br><br><br><br>
  <label for="usr"> <b>Last Experience</b></label>
  <form>
    <label class="radio-inline">

      <input type="radio" name="option">On Time
    </label>
    <br>
    <label class="radio-inline">
      <input type="radio" name="option">Early
    </label>
    <br>
    <label class="radio-inline">
      <input type="radio" name="option">Late
    </label>
  </form>
<br>
<button type="button" class="btn btn-primary" name="update" id="update" onclick="playMusic()" >Update</button>

</div>
</div>
</body>


<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPqXFqgDYhpw6kGNXaefj9EVmxRsYe_bI",
    authDomain: "alarmsafe-74523.firebaseapp.com",
    databaseURL: "https://alarmsafe-74523.firebaseio.com",
    projectId: "alarmsafe-74523",
    storageBucket: "alarmsafe-74523.appspot.com",
    messagingSenderId: "822956699458"
  };
  firebase.initializeApp(config);
</script>
