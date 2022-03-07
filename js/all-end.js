window.addEventListener('load', function () {
    var $button = document.querySelector('.key-img');
    var $key = document.querySelector('.get-key');
    var $mess = document.querySelector('.unrock-mess');
    var $mess2 = document.querySelector('.get-key-mess');
    var $none = document.querySelector('.none-btn-unrock');
    var $cover = document.querySelector('.all-cover');
    var $gole = document.querySelector('.gole-a');
    var $openmess = document.querySelector('.open-mess');
    var $holemess = document.querySelector('.hole-mess');
    var $keyimg = document.querySelector('.key');
    var $exit = document.querySelector('.exit');
    var $body = document.querySelector('.body');
    var $golekey = document.querySelector('.gole-key');
    var $goleyes = document.querySelector('.gole-yes');
    var $goleno = document.querySelector('.gole-no');
    var $endkey = document.querySelector('.end-key');
    var $endyes = document.querySelector('.end-yes');
    var $endno = document.querySelector('.end-no');
    $button.addEventListener('click', function () {
        if ($button.classList.contains('enter')) {
            if ($key.classList.contains('have-key')) {
                if ($button.classList.contains('ok')) {
                    if ($button.classList.contains('ok2')) {
                        $body.classList.add('all-hide');
                        $endkey.classList.add('flex');
                        // $keyimg.classList.add('hide');
                        // $cover.classList.add('all-cover-on');
                        if (!($mess2.classList.contains('hide'))) {
                            $mess2.classList.add('hide');
                        }
                        if (!($holemess.classList.contains('hide'))) {
                            $holemess.classList.add('hide');
                        }
                    }
                }
                else {
                    $button.classList.add('ok');
                    $holemess.classList.add('mess-on');
                    if (!($mess2.classList.contains('hide'))) {
                        $mess2.classList.add('hide');
                    }
                }
            }
        }
    });

    $endyes.addEventListener('click', function () {
        $cover.classList.add('flex');
        $mess.classList.add('mess-on');
        $endkey.classList.remove('flex');
    });

    $endno.addEventListener('click', function () {
        $body.classList.remove('all-hide');
        $endkey.classList.remove('flex');
    });



    $gole.addEventListener('click', function () {
        $golekey.classList.add('flex');
        $body.classList.add('all-hide');
        if (!($mess2.classList.contains('hide'))) {
            $mess2.classList.add('hide');
        }
        if (!($holemess.classList.contains('hide'))) {
            $holemess.classList.add('hide');
        }     
    });

    $goleno.addEventListener('click', function () {
        $golekey.classList.remove('flex');
        $body.classList.remove('all-hide');
    });

    $goleyes.addEventListener('click', function () {
        $openmess.classList.add('mess-on');
        $keyimg.classList.add('hide');
        $cover.classList.add('block');
        $cover.classList.add('cover-invi');
        $golekey.classList.remove('flex');
    });



    $none.addEventListener('click', function () {
        $mess.classList.add('hide');
        $exit.classList.add('exit-up');
    });
});
