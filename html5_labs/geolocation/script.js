function getLocation() {
    // TODO 1: Get the user location in one line(use the "one-time location" function)
    // Pass the success and error callback to the method
    // Position option is not required here
    // The success and error callback have been already defined and are
    // respectively called "successCallback" and "errorCallback"
    
}

function successCallback(pos) {
    // TODO 2: The successCallback is provided a Position object: pos
    // Using the Google Maps API, we want to get a coordinate
    // The google.maps.LatLng function expects a latitude and a longitude as parameters
    // Replace xxxxxx and yyyyyy by the latitude and longitude you can obtain from the Position, pos, object
    var myLatlng = new google.maps.LatLng(xxxxxx, yyyyyy);
    
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    
    // TODO 3: Replace xxxxxx to get the accuracy of our location
    var marker = new google.maps.Marker({
        position: myLatlng, 
        map: map, 
        title:"Accuracy of " + xxxxxx + " meters"
    });
}

function errorCallback (err) {
    switch(err.code) {
        case 1:
            alert("Sorry, but this application does not have the permission to use geolocation");
            break;
        case 2:
            alert("Sorry, but a problem happened while getting your location");
            break;
        case 3:
            alert("Sorry, this is taking too long...");
            break;
        default:
            alert("unknown");
    }
}

// When the window has finished to load, call the getLocation function
window.addEventListener("load", getLocation, true);