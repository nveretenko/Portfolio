

const items = [
    {id: 1,title: 'LoveFit',content: '<p>Bootstrap4, Gulp4, Carousel, svg-sprite...</p>', img: 'images/gym-10.jpg', href: 'https://nveretenko.github.io/Portfolio/LoveFit', order: 'order-md-3 order-lg-0'},
    {id: 2,title: 'Talk_Bootstrap4_Gulp4', 'content': '<p>Bootstrap4, Gulp4, BEM, svg-sprite...</p>', img: 'images/top-banner_mobile.png', href: 'https://nveretenko.github.io/Portfolio/Talk_Bootstrap4_Gulp4/', overlay:'<div class="img-container-overlay"></div>'},
    {id: 3,title: 'Talk_Grid_Gulp4', 'content': '<p>Grid, Gulp4, BEM, svg-sprite...</p>', img: 'images/top-banner_mobile.png', href: 'https://nveretenko.github.io/Portfolio/Talk_Grid_Gulp4/', overlay:'<div class="img-container-overlay"></div>'},
    {id: 4,title: 'СММ<span>щик</span>', 'content': '<p>Flex, Grid, Gulp4, Animation, adaptive, svg-sprite...</p>', img: 'images/mentor-1.jpg', href: 'https://nveretenko.github.io/Portfolio/Smm'},
    {id: 5,title: 'Earth-Moon(<span>test</span>)', 'content': '<p>simple animation</p>', img: 'images/Earth.png', href: 'https://nveretenko.github.io/Portfolio/Earth-Moon+Plane/', classImgContainer: 'img-container_feature', classImgContainerItem: 'img-container__item_feature'},
    {id: 6,title: 'Certificate', 'content': '<p>Certificate</p>', img: 'images/night-work1.jpg', href: 'https://nveretenko.github.io/Portfolio/Certificate.gif'},
    {id: 7,title: '<span>test</span>', 'content': '<p>development is not finished</p>', img: 'images/night-work4.jpg', href: 'javascript:void(0);', order:'order-8'},
    {id: 8,title: 'Wedding(<span>test</span>)', 'content': '<p>bootstrap3</p>', img: 'images/Wedding.jpg', href: 'https://nveretenko.github.io/Portfolio/wedding(bootstrap3)/'},
];

const toHTML = item => `
        <div class="col-md-6 col-lg-3 ${item.order || ''}">
            <div class="row__item">
            ${item.overlay || ''}
                <div class="img-container ${item.classImgContainer || ''}">
                    <img class="img-container__item ${item.classImgContainerItem || ''}" src="${item.img}" alt="" />
                </div>
                <div class="work">
                    <h3 class="work-title">Title of Work</h3>
                    <p>Website development</p>
                    <a data-description="description" data-id="${item.id}" href="#">Description</a>
                    <a href="${item.href}" target="_blank">View site</a>
                </div>
            </div>
        </div>
`;

function render() {
    const html = items.map(toHTML).join('');
    document.querySelector('#items').innerHTML = html;
}
render();

const modal = $.modal({
    width: '400px'
});

document.addEventListener('click', event => {

    const id = +event.target.dataset.id;
    const description = event.target.dataset.description;

    if (description === 'description') {
        event.preventDefault();
        const item = items.find(item => item.id === id);

        modal.setContent(`
            <span class="modal-close" data-close="true">&times;</span>
            <h3 class="modal-title text-center">${item.title}</h3>
            ${item.content}
        `);
        modal.open();
    }
});