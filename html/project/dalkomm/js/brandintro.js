$(document).ready(function () {
    $('#character .character_list h5').click(function () {
        $(this).parent().siblings().fadeToggle();
    });
});