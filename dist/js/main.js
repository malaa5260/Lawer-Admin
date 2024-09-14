$(document).ready(function() {



});
window.onload = function() {
    $(".lds-ripple").fadeOut("5000", function() {
        $("body").css("overflow-y", "auto");
        $(".over").fadeOut("3000");
    });
};
if ($('.wheel-map').length) {
    $('.wheel-map').each(function() {
        initialize(this);
    });
}
$('.toggle-chat').click(function() {
    $('.chat-box').toggleClass('closed');

});

$("#myTab .nav-link").click(function() {
    $('html,body').animate({
            scrollTop: $(".tab-content").offset().top - 130
        },
        'slow');
});

$('.image').on('mousemove', function(event) {
    // This gives you the position of the image on the page
    var bbox = event.target.getBoundingClientRect();

    // Then we measure how far into the image the mouse is in both x and y directions
    var mouseX = event.clientX - bbox.left;
    var mouseY = event.clientY - bbox.top;

    // Then work out how far through the image as a percentage the mouse is
    var xPercent = (mouseX / bbox.width) * 100;
    var yPercent = (mouseY / bbox.height) * 100;

    // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
    //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
    // It's a bit clearer in jQuery:
    $(this).css('transform-origin', (xPercent + '% ' + yPercent + '%'));
    // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.

});
// If you want it to automatically trigger on hover
$('.image').on('mouseenter', function() {
    $(this).addClass('zoom-in');
    $(this).removeClass('normal-zoom');
});

// and stop when not hovering
$('.image').on('mouseleave', function() {
    $(this).addClass('normal-zoom');
    $(this).removeClass('zoom-in');
});

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = count + inc;
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.scrolltop').addClass("show");
    } else {
        $('.scrolltop').removeClass("show");
    }
})
$('.scrolltop').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 300)
})
if ($('.wheel-map').length) {
    $('.wheel-map').each(function() {
        initialize(this);
    });
}


function initialize(_this) {

    var stylesArray = {
        //style 1
        'style-2': [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ],
        'style-1': [{ "featureType": "landscape", "stylers": [{ "hue": "#FFBB00" }, { "saturation": 43.400000000000006 }, { "lightness": 37.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#0078FF" }, { "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#00FF6A" }, { "saturation": -1.0989010989011234 }, { "lightness": 11.200000000000017 }, { "gamma": 1 }] }],

    };

    var styles, map, marker, infowindow, overLay,
        lat = $(_this).attr("data-lat"),
        lng = $(_this).attr("data-lng"),
        contentString = $(_this).attr("data-string"),
        image = $(_this).attr("data-marker"),
        styles_attr = $(_this).attr("data-style"),
        zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
        myLatlng = new google.maps.LatLng(lat, lng);


    // style_1
    if (styles_attr == 'style-1' || styles_attr == 'style-2') {
        styles = stylesArray[styles_attr];
    }
    // custom
    if (typeof hawa_style_map != 'undefined' && styles_attr == 'custom') {
        styles = hawa_style_map;
    }
    // or default style

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    var mapOptions = {
        zoom: zoomLevel,
        disableDefaultUI: true,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(_this, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
        content: contentString,
        padding: 0,
        // pixelOffset: 200
    });
    overLay = new google.maps.OverlayView({
        content: contentString,
        padding: 0
    });
    overLay.draw = function() {
        // var div = this.div_;
        // div.style.left = '10' + "px";
        // div.style.top = '10' + "px";
        // div.style.width = ne.x - sw.x + "px";
        // div.style.height = sw.y - ne.y + "px";
    };
    overLay.setMap(map);



    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}