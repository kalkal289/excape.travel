window.addEventListener('load', function () {
    var $none1 = document.querySelector('.none-btn-end-first');
    var $none2 = document.querySelector('.none-btn-end-gole');
    var $mess1 = document.querySelector('.end-first-mess');
    var $mess2 = document.querySelector('.end-gole-mess');
    var $exit = document.querySelector('.exit');
    var $cover = document.querySelector('.all-cover');
    $none1.addEventListener('click', function () {
        $mess1.classList.add('hide');
        $mess2.classList.add('mess-on');
    });

    $none2.addEventListener('click', function () {
        $mess2.classList.add('hide');
    });
});
