/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function() {


    var map = L.map('map').setView([53.646774, -1.77856], 15);

    L.tileLayer('https://api.mapbox.com/styles/v1/chippy/cirfh4hwx0003h5kprgysft36/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hpcHB5IiwiYSI6IjVRbVFqMWsifQ.7wYEXYi6OBRNDU0roXhb8w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors. Map tiles from <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 19

    }).addTo(map);
    
    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var markerIcon = L.icon({
    iconUrl: 'img/map-marker2.png',
     iconSize:     [40, 66], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
     iconAnchor:   [20, 66], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
    //var marker = L.marker([53.64379, -1.77697], {icon: markerIcon}).addTo(map);
    


  //  var myLatLng = new google.maps.LatLng(53.64396, -1.77697);
  //  var beachMarker = new google.maps.Marker({
  //      position: myLatLng,
  //      map: map,
  //      icon: image
  //  });
});
