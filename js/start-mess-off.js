window.addEventListener('load', function () {
    var $button = document.querySelector('.none-btn-start');
    var $menu = document.querySelector('.start-mess');
    var $btn = document.querySelector('.none-btn-first');
    var $mess = document.querySelector('.first-mess');
    $button.addEventListener('click', function () {
        $menu.classList.add('hide');
    });

    $btn.addEventListener('click', function () {
        $mess.classList.add('hide');
    });
});
