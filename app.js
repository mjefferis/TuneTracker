// Sets up the way that the various elements on the page animate
$('#formy').hide();
$('#successform').hide();
$('#emptyform').hide();


//this is an example of velocity.js this website is a good tutorial: http://www.independent-software.com/velocity-js-tutorial-accelerated-javascript-animation/
$(".jumbotron").velocity("fadeIn", { duration: 1500 })

//more velocity js
$("#upload").velocity({ translateY: 125 }, {
    duration: 2250,
    easing: [300, 8]
});





// Initialize Firebase
var config = {
    apiKey: "AIzaSyC9fF0OACaRvyDOUZcLG5bX_LEUgmK6yGo",
    authDomain: "tunetracker-2260d.firebaseapp.com",
    databaseURL: "https://tunetracker-2260d.firebaseio.com",
    projectId: "tunetracker-2260d",
    storageBucket: "tunetracker-2260d.appspot.com",
    messagingSenderId: "474472193819"
};

firebase.initializeApp(config);

var database = firebase.database();




$('#upload').on('click', function (event) {
    event.preventDefault();
    $('#formy').show();
    $('#upload').hide();

});


$('#cancel-btn').on('click', function (event) {
    event.preventDefault();
    $('#formy').hide();
    $('#upload').show();

    // Clears all of the text-boxes
    $("#user-name").val("");
    $("#user-contact").val("");
    $("#user-file").val("");
    $("#user-description").val("");
});



$("#submit").on("click", function (event) {

    event.preventDefault();


    var name = $("#user-name").val().trim();
    var contact = $("#user-contact").val().trim();
    var fileURL = $("#user-file").val().trim();
    var desc = $("#user-description").val().trim();


/*
    if (navigator.geolocation) {
        var lat_lng = navigator.geolocation.getCurrentPosition(function(position){
          var user_position = {};
          user_position.lat = position.coords.latitude; 
          user_position.lng = position.coords.longitude; 
          callback(user_position);
        });
    }
*/



    var x = document.getElementById("coords");


    function getLocation(callback) {
        if (navigator.geolocation) {
            var lat_lng = navigator.geolocation.getCurrentPosition(function (position) {
                //var user_position = [position.coords.longitude, position.coords.latitude];
                var lng = position.coords.longitude;
                //user_position.lat = position.coords.latitude; 
                // user_position.lng = position.coords.longitude; 
                

                var lat = position.coords.latitude;
                callback(lng + ", " + lat);
            });

        }


        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    getLocation(function (lat_lng) {

        database.ref().push({
            name: name,
            contact: contact,
            fileURL: fileURL,
            desc: desc,
            coords: lat_lng
        });

    });



    /*
     
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
     
        function showPosition(position) {
            x.innerHTML = "[" + position.coords.latitude + "," + position.coords.longitude + "]";
            //window.coordsGlobal = coords;
            //return coords;
            //console.log(coords);
     
        }
     
     
        getLocation();
    */


    /*
    var newPost = {
        name: name,
        contact: contact,
        fileURL: fileURL,
        desc: desc,
        //coords: coords
    
    
    };
    
    database.ref().push(newPost);
    */



    // Clears all of the text-boxes
    $("#user-name").val("");
    $("#user-contact").val("");
    $("#user-file").val("");
    $("#user-description").val("");

    //Hides the form & shows the upload button again

    $('#formy').hide();
    $('#upload').show();



});




    //TRIED TO PUT THE FUNCTION IN AN OBJECT
    /*
        var location = {
    
            getLocation: function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.showPosition);
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            },
    
    
            showPosition: function (position) {
                var coords = "[" + position.coords.latitude + "," + position.coords.longitude + "]";
                return coords;
                console.log(coords);
                //window.coordsGlobal = coords;
                //console.log(coords2);
            },
    
    
            coords: position.coords.latitude
    
        }
    */





        /*
    geoFire.set(<any-name-identifier>, [<lat>,<long>]).then(function() {
        console.log("Location added")
        }).catch(function(error) {
        console.log(error);
        });
*/




