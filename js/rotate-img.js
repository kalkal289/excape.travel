window.addEventListener('load', function () {
    var $button = document.querySelector('.rotate-key');
    $button.addEventListener('click', function () {
        if (!($button.classList.contains('rotate'))) {
            $button.classList.add('rotate');
        }
    });
});
