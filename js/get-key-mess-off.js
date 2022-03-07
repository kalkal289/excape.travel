window.addEventListener('load', function () {
    var $button = document.querySelector('.none-btn-key');
    var $menu = document.querySelector('.get-key-mess');
    var $nonerock = document.querySelector('.none-btn-rock');
    var $messrock = document.querySelector('.rock-mess');
    var $nonehole = document.querySelector('.none-btn-hole');
    var $messhole = document.querySelector('.hole-mess');
    var $keyimg = document.querySelector('.key-img');
    var $cantmess = document.querySelector('.cant-mess');
    var $cantnone = document.querySelector('.none-btn-cant');

    $button.addEventListener('click', function () {
        $menu.classList.add('hide');
    });
    
    $nonerock.addEventListener('click', function () {
        $messrock.classList.remove('mess-on');
    });

    $cantnone.addEventListener('click', function () {
        $cantmess.classList.add('push-btn');
    });
    
    $nonehole.addEventListener('click', function () {
        $messhole.classList.remove('mess-on');
        if (!($keyimg.classList.contains('ok2'))) {
            $keyimg.classList.add('ok2');
        }
    });
});
