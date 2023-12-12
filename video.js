  // Mute the YouTube video
  function onYouTubeIframeAPIReady() {
    var player = new YT.Player('iframe', {
        events: {
            'onReady': function(event) {
                event.target.mute(); // Mute the video
            }
        }
    });
}