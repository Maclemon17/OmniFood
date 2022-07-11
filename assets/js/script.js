$(document).ready(function () {
    var waypoints = new waypoints
    waypoints = $('.js--features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    })

    console.log('loaded');
})

// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//     }, {
//     offset: '25%'
// })

// alert('hello')
