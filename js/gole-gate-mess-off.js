window.addEventListener('load', function () {
    var $button = document.querySelector('.none-btn-gole');
    var $menu = document.querySelector('.gole-gate-mess');
    $button.addEventListener('click', function () {
        $menu.classList.add('hide');
    });
});
