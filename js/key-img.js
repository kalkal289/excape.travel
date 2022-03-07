window.addEventListener('load', function () {
    var $btn = document.querySelector('.key-img');
    var $have = document.querySelector('.get-key');
    var $mess = document.querySelector('.hole-mess');
    var $mess2 = document.querySelector('.rock-mess');
    var $mess3 = document.querySelector('.start-mess');
    var $mess4 = document.querySelector('.article-trade-mess');
    var $mess5 = document.querySelector('.word-system-mess');
    var $mess6 = document.querySelector('.gole-gate-mess');
    $btn.addEventListener('click', function () {
        if ($btn.classList.contains('enter')) {
            if (!($have.classList.contains('have-key'))) {
                if (!($mess.classList.contains('mess-on'))) {
                    $mess.classList.add('mess-on');
                    if (!($btn.classList.contains('ok'))) {
                        $btn.classList.add('ok');
                    }
                }

                if ($mess2.classList.contains('mess-on')) {
                    $mess2.classList.remove('mess-on');
                }
                if (!($mess3.classList.contains('hide'))) {
                    $mess3.classList.add('hide');
                }
                if (!($mess4.classList.contains('hide'))) {
                    $mess4.classList.add('hide');
                }
                if (!($mess5.classList.contains('hide'))) {
                    $mess5.classList.add('hide');
                }
                if (!($mess6.classList.contains('hide'))) {
                    $mess6.classList.add('hide');
                }
            }
        }
        
        if ($btn.classList.contains('rock9')) {
            $btn.classList.remove('rock9');
            $btn.classList.add('enter');
            $btn.classList.remove('author-img3');
        }
        
        if ($btn.classList.contains('rock8')) {
            $btn.classList.remove('rock8');
            $btn.classList.add('rock9');
        }
        
        if ($btn.classList.contains('rock7')) {
            $btn.classList.remove('rock7');
            $btn.classList.add('rock8');
        }
        
        if ($btn.classList.contains('rock6')) {
            $btn.classList.remove('rock6');
            $btn.classList.add('rock7');
            $btn.classList.add('author-img3');
            $btn.classList.remove('author-img2');
        }
        
        if ($btn.classList.contains('rock5')) {
            $btn.classList.remove('rock5');
            $btn.classList.add('rock6');
        }
        
        if ($btn.classList.contains('rock4')) {
            $btn.classList.remove('rock4');
            $btn.classList.add('rock5');
        }
        
        if ($btn.classList.contains('rock3')) {
            $btn.classList.remove('rock3');
            $btn.classList.add('rock4');
            $btn.classList.add('author-img2');
            $btn.classList.remove('author-img1');
        }
        
        if ($btn.classList.contains('rock2')) {
            $btn.classList.remove('rock2');
            $btn.classList.add('rock3');
        }

        if ($btn.classList.contains('rock1')) {
            $btn.classList.remove('rock1');
            $btn.classList.add('rock2');
        }
        
        if ($btn.classList.contains('rock')) {
            $btn.classList.remove('rock');
            $btn.classList.add('rock1');
        }
    });


    $btn.addEventListener('touchstart', function () {
        if ($btn.classList.contains('enter')) {
            if (!($have.classList.contains('have-key'))) {
                if (!($mess.classList.contains('mess-on'))) {
                    $mess.classList.add('mess-on');
                    if (!($btn.classList.contains('ok'))) {
                        $btn.classList.add('ok');
                    }
                }

                if ($mess2.classList.contains('mess-on')) {
                    $mess2.classList.remove('mess-on');
                }
                if (!($mess3.classList.contains('hide'))) {
                    $mess3.classList.add('hide');
                }
                if (!($mess4.classList.contains('hide'))) {
                    $mess4.classList.add('hide');
                }
                if (!($mess5.classList.contains('hide'))) {
                    $mess5.classList.add('hide');
                }
                if (!($mess6.classList.contains('hide'))) {
                    $mess6.classList.add('hide');
                }
            }
        }
        
        if ($btn.classList.contains('rock9')) {
            $btn.classList.remove('rock9');
            $btn.classList.add('enter');
            $btn.classList.remove('author-img3');
        }
        
        if ($btn.classList.contains('rock8')) {
            $btn.classList.remove('rock8');
            $btn.classList.add('rock9');
        }
        
        if ($btn.classList.contains('rock7')) {
            $btn.classList.remove('rock7');
            $btn.classList.add('rock8');
        }
        
        if ($btn.classList.contains('rock6')) {
            $btn.classList.remove('rock6');
            $btn.classList.add('rock7');
            $btn.classList.add('author-img3');
            $btn.classList.remove('author-img2');
        }
        
        if ($btn.classList.contains('rock5')) {
            $btn.classList.remove('rock5');
            $btn.classList.add('rock6');
        }
        
        if ($btn.classList.contains('rock4')) {
            $btn.classList.remove('rock4');
            $btn.classList.add('rock5');
        }
        
        if ($btn.classList.contains('rock3')) {
            $btn.classList.remove('rock3');
            $btn.classList.add('rock4');
            $btn.classList.add('author-img2');
            $btn.classList.remove('author-img1');
        }
        
        if ($btn.classList.contains('rock2')) {
            $btn.classList.remove('rock2');
            $btn.classList.add('rock3');
        }

        if ($btn.classList.contains('rock1')) {
            $btn.classList.remove('rock1');
            $btn.classList.add('rock2');
        }
        
        if ($btn.classList.contains('rock')) {
            $btn.classList.remove('rock');
            $btn.classList.add('rock1');
        }
    });
});
