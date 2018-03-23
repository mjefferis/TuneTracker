
function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    var match = url.match(regExp);

    if (match && match[2].length == 11){

        return match[2];
    } else {
        return "error";
    }

}

$("#submit").on("click", function(event){

    event.preventDefault();

    var rawLink =$("#link").val().trim();
     var embedLink = getId(rawLink);
     console.log(embedLink);

     $("#link").emmpty();
    



});




