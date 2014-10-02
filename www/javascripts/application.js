// Display the native navigation bar with the title
steroids.view.navigationBar.show("Sun Chamber");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#FFFFFF");

//steroids.logger.log('click worked');

var socket = io.connect('http://' + location.host),

    state = {
      in1: 1,
      in2: 0
    },
    toggleButton = function (relay) {
        var $button = $('.' + relay),
            text = state[relay] ? 'Off' : 'On';

        if (state[relay]) {
            $button.addClass('on');
        } else {
            $button.removeClass('on');
        }

        $button.text('Turn ' + text);
    };

steroids.on('ready', function() {

    toggleButton('in1');
    toggleButton('in2');
    
    $('.in1').click(function () {
        state.in1 = state.in1 ? 0 : 1;
        toggleButton('in1');
        socket.emit('in1', state.in1);
    });
    
    $('.in2').click(function () {
        state.in2 = state.in2 ? 0 : 1;
        toggleButton('in2');
        socket.emit('in2', state.in2);
    });
    
});


