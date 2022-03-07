window.addEventListener('load', function () {
    var $button = document.querySelector('.move-point');
    var $menu = document.querySelector('.trick');
    var $mess = document.querySelector('.rock-mess');
    var $rockbox = document.querySelector('.rock-box');
    var $gole = document.querySelector('.gole-a');
    var $getkey = document.querySelector('.get-key');
    var $mess2 = document.querySelector('.gole-gate-mess');
    var $mess3 = document.querySelector('.hole-mess');
    $button.addEventListener('click', function () {
        $menu.classList.add('move');
        if ($getkey.classList.contains('have-key')) {
            if (!($gole.classList.contains('gole-link'))) {
                $gole.classList.add('gole-link');
            }
        }
        else {
            $rockbox.classList.add('rock-box-on');
        }
        
    });

    $rockbox.addEventListener('click', function () {

        if (!($mess.classList.contains('mess-on'))) {
            $mess.classList.add('mess-on');

            if (!($mess2.classList.contains('hide'))) {
                $mess2.classList.add('hide');
            }

            if ($mess3.classList.contains('mess-on')) {
                $mess3.classList.remove('mess-on');
            }
        }
    });
});
