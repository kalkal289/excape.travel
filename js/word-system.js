window.addEventListener('load', function () {
    var $button = document.querySelector('.on-button');
    var $hide = document.querySelector('.hide-button');
    var $mess = document.querySelector('.word-system-mess');
    var $line = document.querySelector('.system-line');
    var $mes1 = document.querySelector('.mes1');
    var $mes2 = document.querySelector('.mes2');
    var $mes3 = document.querySelector('.mes3');
    var $mes4 = document.querySelector('.mes4');
    var $mes5 = document.querySelector('.mes5');
    var $mes6 = document.querySelector('.mes6');
    var $mess1 = document.querySelector('.article-trade-mess');
    $button.addEventListener('click', function () {
        $hide.classList.add('hide-button-on');

        if (!($mess.classList.contains('mess-on'))) {
            $mess.classList.add('mess-on');
        
            if (!($mess1.classList.contains('hide'))) {
                $mess1.classList.add('hide');
            }
        }

        if (!($line.classList.contains('system-line-on'))) {
            $line.classList.add('system-line-on');
        }

        if ($mes1.classList.contains('mes')) {
            $mes1.classList.remove('mes');
        }
        else {
            $mes1.classList.add('mes');
        }

        if ($mes2.classList.contains('mes')) {
            $mes2.classList.remove('mes');
        }
        else {
            $mes2.classList.add('mes');
        }
        
        if ($mes3.classList.contains('mes')) {
            $mes3.classList.remove('mes');
        }
        else {
            $mes3.classList.add('mes');
        }
        
        if ($mes4.classList.contains('mes')) {
            $mes4.classList.remove('mes');
        }
        else {
            $mes4.classList.add('mes');
        }
        
        if ($mes5.classList.contains('mes')) {
            $mes5.classList.remove('mes');
        }
        else {
            $mes5.classList.add('mes');
        }
        
        if ($mes6.classList.contains('mes')) {
            $mes6.classList.remove('mes');
        }
        else {
            $mes6.classList.add('mes');
        }
    });
});
