window.addEventListener('load', function () {
    var $none1 = document.querySelector('.none-btn-mess');
    var $mess1 = document.querySelector('.gole-mess');
    var $mess2 = document.querySelector('.gole-navi-mess');
    var $none2 = document.querySelector('.none-btn-mess2');
    $none1.addEventListener('click', function () {
        $mess1.classList.add('gole-mess-none');
        $mess2.classList.add('mess-on');
    });
    
    $none2.addEventListener('click', function () {
        $mess2.classList.add('hide');
    });
});
