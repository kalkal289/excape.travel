window.addEventListener('load', function () {
    var $flow1 = document.querySelector('.flow1');
    var $flow2 = document.querySelector('.flow2');
    var $flow3 = document.querySelector('.flow3');
    $flow1.addEventListener('click', function () {
        $flow1.classList.add('flow-on');
    });

    $flow2.addEventListener('click', function () {
        $flow2.classList.add('flow-on');
    });

    $flow3.addEventListener('click', function () {
        $flow3.classList.add('flow-on');
    });
});
