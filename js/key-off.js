window.addEventListener('load', function () {
    var $btn = document.querySelector('.get-key');
    var $key = document.querySelector('.key');
    var $mess = document.querySelector('.get-key-mess');
    var $gole = document.querySelector('.gole-a');
    var $rockbox = document.querySelector('.rock-box');
    var $trick = document.querySelector('.trick');
    var $mess2 = document.querySelector('.gole-gate-mess');
    var $mess3 = document.querySelector('.rock-mess');
    var $mess4 = document.querySelector('.hole-mess');
    $btn.addEventListener('click', function () {
        $btn.classList.add('get-key-none');
        $key.classList.add('key-on');
        $btn.classList.add('have-key');
        $mess.classList.add('mess-on');
        $rockbox.classList.remove('rock-box-on');

        if ($trick.classList.contains('move')) {
        $gole.classList.add('gole-link');
        }

        if (!($mess2.classList.contains('hide'))) {
            $mess2.classList.add('hide');
        }
        if ($mess3.classList.contains('mess-on')) {
            $mess3.classList.remove('mess-on');
        }
        if ($mess4.classList.contains('mess-on')) {
            $mess4.classList.remove('mess-on');
        }
    });
});
