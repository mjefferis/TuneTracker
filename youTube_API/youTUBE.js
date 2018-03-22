    //pseudo code
    /* 
    player puts in a link with their contact information.
    the takes the link and daves it on youtube. It creates an iframe of the users youtube video

    */
    //var divIframe = $("#newplayer");

    $("#find-link").on("click", function(event){

      event.preventDefault();

      var link = $("#user-file").val().trim();
      console.log(link);

      $("#newplayer").attr("src",link);
      
      

    });

  
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("newplayer", {

        
      });
    }

    // 4. The API will call this function when the video player is ready.
   /*
    function onPlayerReady(event) {
      event.target.playVideo();
    }
    */

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    /*
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }

    

   function searchListByKeyword(auth, requestData) {
    var service = google.youtube('v3');
    var parameters = removeEmptyParameters(requestData['params']);
    parameters['auth'] = auth;
    service.search.list(parameters, function(err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      console.log(response);
    });
  }
  
  //See full code sample for authorize() function code.
  authorize(JSON.parse(content), {'params': {'maxResults': '25',
                   'part': 'snippet',
                   'q': 'surfing',
                   'type': ''}}, searchListByKeyword);

                   */