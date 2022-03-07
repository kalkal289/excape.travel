window.addEventListener('load', function () {
    var $button = document.querySelector('.none-btn-trade');
    var $menu = document.querySelector('.article-trade-mess');
    $button.addEventListener('click', function () {
        $menu.classList.add('hide');
    });
});
