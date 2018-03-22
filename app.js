// Sets up the way that the various elements on the page animate
$('#formy').hide();
$('#successform').hide();
$('#emptyform').hide();
$('#badlink').hide();

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



$("#submit").on("click", function (event) {

    event.preventDefault();

    var name = $("#user-name").val().trim();
    var contact = $("#user-contact").val().trim();
    var fileURL = $("#user-file").val().trim();
    var desc = $("#user-description").val().trim();
    var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    var match = fileURL.match(regExp);

    if (name === "" || contact === "" || fileURL === "" || desc === "") {
        $('#emptyform').show();
        setTimeout(function () { $("#emptyform").hide(); }, 4000);
    }


    else if (match !== 11 || match[2].length !== 11) {
        $('#badlink').show();
        setTimeout(function () { $("#badlink").hide(); }, 4000);
    }

    else {

        var newPost = {
            name: name,
            contact: contact,
            fileURL: fileURL,
            desc: desc
        };

        database.ref().push(newPost);

        // Clears all of the text-boxes
        $("#user-name").val("");
        $("#user-contact").val("");
        $("#user-file").val("");
        $("#user-description").val("");

        //Hides the form & shows the upload button again

        $('#formy').hide();
        $('#upload').show();
        $('#successform').show();
        setTimeout(function () { $("#successform").hide(); }, 4000);



    }

});






