window.addEventListener('load', function () {
    var $button = document.querySelector('.start-btn');
    var $start = document.querySelector('.start-btn');
    var $reset = document.querySelector('.restart-btn');
    var $mess = document.querySelector('.start-mess');
    var $flow = document.querySelector('.flow-words');
    var $key = document.querySelector('.key-img');
    var $mess2 = document.querySelector('.first-mess');
    var $twitter = document.querySelector('.twitter-cover');
    $button.addEventListener('click', function () {
        $start.classList.add('start-btn-none');
        $reset.classList.add('restart-btn-block');
        $mess.classList.add('mess-on');
        $flow.classList.add('flow-words-on');
        $key.classList.add('rock');
        $twitter.classList.add('flex');

        if (!($mess2.classList.contains('hide'))) {
            $mess2.classList.add('hide');
        }
    });
});
