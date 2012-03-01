// When the document is ready, execute the function passed as a parameter
$(document).ready(function(){
    
    // Here we test if the video element is supported
    // $('<video/>') creates a jQuery object
    // $('<video/>')[0] turns the jQuery object into a DOM object
    if(!!$('<video/>')[0].play){
        
        // Get the video element in the page
        var $video = $('#player');
        
        //Remove the default controls of the video player since we are implementing our own
        $video.removeAttr('controls');
        
        // Wrap the video in a div, so we can absolutely position the new controller in there
        var $videoWrapper = $('<div/>');
        $video.parent().append($videoWrapper);
        $video.appendTo($videoWrapper);
        
        //Create the controller that we are going to append in the previously created $videoWrapper
        var $controls = $('<div/>', { 'id':'controls' });
        $video.parent().append($controls);
        $controls.html('<button id="toggle">play</button>'+
                    '<output id="display">-:--:--</output>'+
                    '<input type="range" min="0" max="1" step="0.1" id="volume"/>'+
                    '<select id="speed">'+
                    '<option value="0.5">1/2x</option>'+
                    '<option value="1" selected>1x</option>'+
                    '<option value="2">2x</option>'+
                    '</select>');
        
        var $volumeSlider = $('#volume');
        $volumeSlider.val($video[0].volume);
        
        var $speedSelector = $('#speed');
        
        var $timeDisplay = $('#display');
        
        var $playPauseButton = $('#toggle');
        
        // TODO 1: Change the speed of the video to be the selected new value
        // The new value can be obtained with e.target.value
        // The video DOM object can be obtained with $video[0]
        $speedSelector.change(function(e){    
            
        });
        
        $video.bind('timeupdate',function(e){
            /* split currentTime (seconds) into separate hour/minute/second strings */
            var s=e.target.currentTime;
            var h=Math.floor(s/3600);
            s=s%3600;
            var m=Math.floor(s/60);
            s=Math.floor(s%60);
            /* pad the minute and second strings to two digits */
            if (s.toString().length < 2) s="0"+s;
            if (m.toString().length < 2) m="0"+m;

            $timeDisplay.html(h+":"+m+":"+s);
        });
        
        // TODO 2: If the video is playing change the text of the button to be "play"
        // and pause the video. If the video is paused change the text of the button
        // to "pause" and play the video. If the video has ended you want to make sure
        // you reset the time to 0 before playing the video
        // IMPORTANT NOTE FOR JQUERY: the video DOM object can be accessed with $video[0]
        // To change the text of the button using jQuery you can do: $(this).html('text');
        $playPauseButton.click(function(){
            
        });
        
        // TODO 3: Check when the video is ended so you change the value of the toggle button
        // to be "play", replace xxxxxx by the name of the event you should listen to
        // IMPORTANT NOTE FOR JQUERY: you can change the text of the button like that: $playPauseButton.html('text');
        $video.bind('xxxxxx', function(){
            
        });
        
        // TODO 4: Listen out for a change to the volume slider and update video volume accordingly
        // IMPORTANT NOTE FOR JQUERY: the video DOM object can be accessed with $video[0]
        // The value of the slider can be accessed with e.target.value
        $volumeSlider.bind('change', function(e) {
            
        });
    }
});