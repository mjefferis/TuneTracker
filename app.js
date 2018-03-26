//Hides the form from appearing on the page upon first load
$('#formy').hide();
$('#successform').hide();
$('#emptyform').hide();


// Velocity JS Library (controls the animation of the page's elements)
$(".jumbotron").velocity("fadeIn", { duration: 1500 })
$("#upload").velocity({ translateY: 125 }, {
    duration: 2250,
    easing: [300, 8]
});

// Code for how the form pops up when Upload is clicked
$('#upload').on('click', function (event) {
    event.preventDefault();
    $('#formy').show();
    $('#upload').hide();

});

//Code for what happens when the cancel button is clicked
$('#cancel-btn').on('click', function (event) {
    event.preventDefault();
    $('#formy').hide();
    $('#upload').show();

    //Clears all of the text-boxes
    $("#user-name").val("");
    $("#user-contact").val("");
    $("#user-file").val("");
    $("#user-description").val("");
});





// Initializes Firebase
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






// Sets up what happens when the submit button is clicked on the form
$("#submit").on("click", function (event) {

    event.preventDefault();

    //Takes in the values that were entered in the form
    var name = $("#user-name").val().trim();
    var contact = $("#user-contact").val().trim();
    var fileURL = $("#user-file").val().trim();
    var desc = $("#user-description").val().trim();



    var x = document.getElementById("coords");


    //Runs a function to acquire the user's coordinates when they are submitting a new post
    function getLocation(callback) {
        if (navigator.geolocation) {
            var lat_lng = navigator.geolocation.getCurrentPosition(function (position) {
                var lng = position.coords.longitude;
                var lat = position.coords.latitude;
                callback(lng + ", " + lat);
            });

        }


        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    //Runs the getLocation function to push the values from the form to Firebase, as an object
    getLocation(function (lat_lng) {

        database.ref().push({
            name: name,
            contact: contact,
            fileURL: fileURL,
            desc: desc,
            coords: lat_lng

        });

    });


    // Clears all of the text-boxes
    $("#user-name").val("");
    $("#user-contact").val("");
    $("#user-file").val("");
    $("#user-description").val("");

    //Hides the form & shows the upload button again

    $('#formy').hide();
    $('#upload').show();



});



