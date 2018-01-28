/*function apiCall(){
  var homeaddress = $("#home").value;

//https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=AIzaSyC7ZCMYbXM7VEDeJFXsy57MEB7buQxOhso&origins=1128%20dundas%20street%20west%20mississauga%20on&destinations=100%20city%20center%20drive%20missississauga%20on
  url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=AIzaSyC7ZCMYbXM7VEDeJFXsy57MEB7buQxOhso&origins=" + homeaddress.replace(" ","%")+ "&destinations=" + destination.replace(" ", "%")
  $.getJson(url, function(destinationinfo))

    console.log(homeaddress);
    x=document.getElementById("form1");
    show=x.elements["#home"].value;
    console.log(show);
}*/


$(document).ready(function() {
  $( "#calculate" ).click(function() {

    var homeaddress = $("#home").val();
    var destination = $("#destination").val();
    var arrivaltime = $("#arrivaltime").val();

    console.log(homeaddress);
    console.log(destination);
    url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=AIzaSyC7ZCMYbXM7VEDeJFXsy57MEB7buQxOhso&origins=" + homeaddress.replace(" ","%")+ "&destinations=" + destination.replace(" ", "%");

    console.log(url);
    $.getJSON(url, function(destinationinfo){
      console.log(destinationinfo);
    });

  });

   $( "#update" ).click(function() {

      var radios=document.getElementsByName("option");
      if (radios[0].checked){
        //he arrived on time dont make any changes
      }
      if (radios[1].checked){
        //he arrived early
      }
      if (radios[2].checked){
        //he arrived late

      }

   });






    });






    // $( "#update" ).click(function() {
    //   console.log("fml");
    //
    // });
//
// $("#submit").click(function writeUserData(userId) {
//
//   var database = firebase.database();
//
//   database.ref('users/' + userId).set({
//     homeaddress: $("#home").value
//     destination: $("#destination").value
//     prepTime: $("#prepTime").value
//   });
// });
//
//
//
// window.onLoad()
//
// var ref = firebase.database().ref();
// ref.on("prepTime", function(snapshot) {
//    console.log(snapshot.val());
//    var view = snapshot.val();
//    return view
// }, function (error) {
//    console.log("Error: " + error.code);
// });
