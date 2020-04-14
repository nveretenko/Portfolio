

let popups = [
    {id: 0, title: 'LoveFit', content: 'Bootstrap4, Gulp4, Carousel, svg-sprite...'},
    {id: 1, title: 'Blog(<span>test</span>)', content: 'flex, css grid, bem, responsive'},
    {id: 2, title: 'Wedding(<span>test</span>)', content: 'bootstrap3'},
    {id: 3, title: 'Earth-Moon(<span>test</span>)', content: 'simple animation'},
    {id: 4, title: 'Certificate', content: 'Certificate'},
    {id: 5, title: 'Talk_Bootstrap4_Gulp4', content: 'Bootstrap4, Gulp4, BEM, svg-sprite...'},
    {id: 6, title: 'Talk_Grid_Gulp4', content: 'Grid, Gulp4, BEM, svg-sprite...'},
    {id: 7, title: '(<span>test</span>)', content: 'development is not finished'}
];

function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('modal-window');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="popup" id = "${options.id}">
        <span class="modal-close">X</span>
        <h3 class="popup-title text-center">${options.title}</h3>
        <p>${options.content}</p>
    </div>`);

    document.body.appendChild(modal);

    let open = $('.js-open-modal');
    let close = $('.modal-close, .overlay');
    let overlay = $('.overlay');

    $('.popup').fadeIn(
        function () {
            $(this).css('display', 'block')
                .animate({opacity: 1}, 200);
        }
    );
    overlay.fadeIn(
        function(){
            $(this).css('display', 'block')
                .animate({opacity: 1}, 200);
        });
    close.click(function () {
        $('.popup')
            .animate({opacity: 0}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut();
                }
            );
    });

    return modal
}

document.addEventListener('click', event => {
    const id = +event.target.dataset.id;
    const btnId = event.target.dataset.id;

    if (btnId) {
        _createModal(popups[id])
    }
});

