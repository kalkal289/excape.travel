window.addEventListener('load', function () {
    var $button = document.querySelector('.hide-button');
    var $menu = document.querySelector('.gole-gate-mess');
    var $gate = document.querySelector('.move-point');
    var $cover = document.querySelector('.cover');
    var $mess2 = document.querySelector('.word-system-mess');
    var $key = document.querySelector('.key-hide');

    $button.addEventListener('click', function () {
        if (!($menu.classList.contains('gole-gate-mess-on'))) {
            $menu.classList.add('mess-on');
        }
        if (!($gate.classList.contains('keyy'))) {
            $gate.classList.add('keyy');
        }
        if (!($cover.classList.contains('cover-none'))) {
            $cover.classList.add('cover-none');
        }
        $key.classList.add('key-hide-on');
        
        if (!($mess2.classList.contains('hide'))) {
            $mess2.classList.add('hide');
        }
        
    });
});
