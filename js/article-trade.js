window.addEventListener('load', function () {
    var $miss1 = document.querySelector('.miss1');
    var $miss2 = document.querySelector('.miss2');
    var $miss3 = document.querySelector('.miss3');
    var $miss4 = document.querySelector('.miss4');
    var $miss5 = document.querySelector('.miss5');
    var $miss6 = document.querySelector('.miss6');
    var $miss7 = document.querySelector('.miss7');
    var $miss8 = document.querySelector('.miss8');
    var $miss9 = document.querySelector('.miss9');
    var $miss10 = document.querySelector('.miss10');
    var $miss11 = document.querySelector('.miss11');
    var $miss12 = document.querySelector('.miss12');
    var $miss13 = document.querySelector('.miss13');
    var $miss14 = document.querySelector('.miss14');
    var $pass1 = document.querySelector('.pass1');
    var $pass2 = document.querySelector('.pass2');
    var $pass3 = document.querySelector('.pass3');
    var $pickup5 = document.querySelector('.pickup5');
    var $hide = document.querySelector('.hide-a');
    var $mess = document.querySelector('.article-trade-mess');
    var $mess2 = document.querySelector('.start-mess');
    $pass1.addEventListener('click', function () {
        if ($pass2.classList.contains('miss1')) {
            $pass2.classList.remove('miss1');
        }
    });
    
    $pass2.addEventListener('click', function () {
        if ($pass2.classList.contains('miss1')) {
            if (!($pass3.classList.contains('miss2'))) {
                $pass3.classList.add('miss2');
            }
        }
        else {
            $pass2.classList.add('miss1');
            $pass3.classList.remove('miss2');
        }
    });

    $pass3.addEventListener('click', function () {
        if ($pass3.classList.contains('miss2')) {
            if (!($pass2.classList.contains('miss1'))) {
                $pass2.classList.add('miss1');
            }
        }
        else {
            $pass3.classList.add('miss2');
            
            if (!($pickup5.classList.contains('pickup5-none'))) {
                $pickup5.classList.add('pickup5-none');
            }

            if (!($hide.classList.contains('block'))) {
                $hide.classList.add('block');
            }

            if (!($mess.classList.contains('mess-on'))) {
                $mess.classList.add('mess-on');
                
                if (!($mess2.classList.contains('hide'))) {
                    $mess2.classList.add('hide');
                }
            }
        }
    });

    $miss3.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss4.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss5.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss6.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss7.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss8.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss9.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss10.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss11.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss12.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss13.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });

    $miss14.addEventListener('click', function () {
        if (!($pass2.classList.contains('miss1'))) {
            $pass2.classList.add('miss1');
        }
        if (!($pass3.classList.contains('miss2'))) {
            $pass3.classList.add('miss2');
        }
    });
});
