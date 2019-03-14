
$(document).ready(function() {
    var overlay = $('.overlay');
    var open_modal = $('.js-open-modal');
    var close = $('.modal-close, .overlay');
    var modal = $('.popup');

    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '48%'}, 200);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut();
                }
            );
    });
});