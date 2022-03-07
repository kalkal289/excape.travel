window.addEventListener('load', function () {
    var $button = document.querySelector('.none-btn-system');
    var $menu = document.querySelector('.word-system-mess');
    $button.addEventListener('click', function () {
        $menu.classList.add('hide');
    });
});
