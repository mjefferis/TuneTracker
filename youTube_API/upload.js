


// function get takes in a link and gets out the videoID
function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    var match = url.match(regExp);

    if (match && match[2].length == 11){
        return match[2];
    } else {
        return "error";
    }

}
 
var apiKey = 'AIzaSyDj5D3uV6x8m2T6OKI8Ku7DOeddJkP8JwQ';
  
var player;
function onYouTubeIframeAPIReady() {
    $("#click-me").on("click", function (event) {

        event.preventDefault();

        var rawLink = $("#user-file").val().trim();
        var userVideoID = getId(rawLink);

        player = new YT.Player('ytPlayer', {
            height: '360',
            width: '640',
            videoId: userVideoID,


        });
    });

};
    

    
