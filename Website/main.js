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

function myFunction(){


  y=document.getElementById("user").value;

console.log(y);


}

$(window).load(function() {


  x=document.getElementById("user").value;

//  console.log(y);


});
$("#save-btn").click(function() {

  var blob = new Blob(["test text"], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "testfile1.txt");
});


setInterval(function(){
    playMusic()}, 30000)



function playMusic(){
  y=document.getElementById("user").value;



  hours=0;
    arrivaltimehours=parseInt(document.getElementById("hours").value);
    arrivaltimemins=parseInt(document.getElementById("mins").value);



    readytime=parseInt(document.getElementById("readytime").value);

    if(arrivaltimemins-readytime-y<0){
      hours=arrivaltimehours-1;
      mins=60+(arrivaltimemins-readytime-y);
    }
    else{
      hours=arrivaltimehours;
      mins=arrivaltimemins-readytime-y;
    }




    //playMusic();

  var music = new Audio('song.mp3');

    var date = new Date();


    if(date.getHours() === hours && date.getMinutes() === mins) { // Check the time
        music.play();
    }
  }


  // var radios=document.getElementsByName("option");
  // if (radios[0].checked){
  //   //he arrived on time dont make any changes
  //   document.getElementById("machinelearning").value = 0;
  // }
  // if (radios[1].checked){
  //     document.getElementById("machinelearning").value = 5;
  // }
  // if (radios[2].checked){
  //     document.getElementById("machinelearning").value = -5;
  //
  // }
  // y=document.getElementById("user").value;
  // console.log(y);
  //
  // machinelearning=document.getElementById("machinelearning").value;

/////////////////////////////////////////////////////////////////////////////////
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


// function visitPage() {
//    var your_param = 'abc';
//    $.ajax({
//        url: "C:/xampp/htdocs/demo/run.py",
//        type: 'GET',
//        success: function (response) {
//            console.log(response);
//        },
//        error: function (error) {
//            console.log(error);
//        }
//     });
// }
// $(document).ready(function() {
//   $( "#calculate" ).click(function() {
//
//     var homeaddress = $("#home").val();
//     var destination = $("#destination").val();
//     var arrivaltime = $("#arrivaltime").val();
//
//     var service = new google.maps.DistanceMatrixService();
// service.getDistanceMatrix(
//   {
//     origins: [homeaddress],
//     destinations: [destination],
//     travelMode: 'DRIVING',
//     transitOptions: TransitOptions,
//     drivingOptions: DrivingOptions,
//     unitSystem: UnitSystem,
//     avoidHighways: Boolean,
//     avoidTolls: Boolean,
//   },  distcallback);
//
// function distcallback(response, status){
//   console.log(response);
//
// }





    // console.log(homeaddress);
    // console.log(destination);
    // url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=AIzaSyC7ZCMYbXM7VEDeJFXsy57MEB7buQxOhso&origins=" + homeaddress.replace(" ","%")+ "&destinations=" + destination.replace(" ", "%");
    // console.log(url);
    // $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=AIzaSyC7ZCMYbXM7VEDeJFXsy57MEB7buQxOhso&origins=" + homeaddress.replace(" ","%")+ "&destinations=" + destination.replace(" ", "%")){
    //   console.log(destinationinfo);
    // });
//    var xhr = new XMLHttpRequest();
// xhr.open("GET", url , true);
// xhr.setRequestHeader("Access-Control-Allow-Origin", "https://maps.googleapis.com");
// xhr.onload = function () {
//     console.log(xhr.responseText);
// };
// xhr.send()
// function createCORSRequest(method, url) {
// 	var xhr = new XMLHttpRequest();
// 	if ("withCredentials" in xhr) {
// 		xhr.open('GET', url, true);
// 	} else if (typeof XDomainRequest != "undefined") {
// // XDomainRequest for IE
// 		xhr = new XDomainRequest();
// 		xhr.open('GET', url);
// 	} else {
// // CORS not supported
// 		xhr = null;
// 		document.getElementById("txtHint").innerHTML = "CORS not supported.";
// 	}
//   return xhr;
// }
// var xhr = createCORSRequest("GET", url);
// xhr.setRequestHeader("Access-Control-Allow-Origin", "https://maps.googleapis.com");
// xhr.send();


//  });
// function playMusic(){
//
//
//   var radios=document.getElementsByName("option");
//   if (radios[0].checked){
//     //he arrived on time dont make any changes
//     document.getElementById("machinelearning").value = 0;
//   }
//   if (radios[1].checked){
//       document.getElementById("machinelearning").value = 5;
//   }
//   if (radios[2].checked){
//       document.getElementById("machinelearning").value = -5;
//
//   }
//
//
// }
  //  });

    // function gettingJSON(){
    //        document.write("jquery loaded");
    //        $.getJSON("http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22",function(json){
    //            console.log(json);
    //        });
    //    }
    //
    // function getweather(){
    //
    //           $.getJSON("http://openweathermap.org/help/city_list.txt",function(json){
    //               console.log(json);
    //           });
    //       }





    // $( "#update" ).click(function() {
    //   consol
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
