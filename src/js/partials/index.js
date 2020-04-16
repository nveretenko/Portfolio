

const items = [
    {id: 0, img: 'images/gym-10.jpg', href: 'https://nveretenko.github.io/Portfolio/LoveFit', order: 'order-md-3 order-lg-0'},
    {id: 1, img: 'images/top-banner_mobile.png', href: 'https://nveretenko.github.io/Portfolio/Talk_Bootstrap4_Gulp4/', overlay:'<div class="img-container-overlay"></div>'},
    {id: 2, img: 'images/top-banner_mobile.png', href: 'https://nveretenko.github.io/Portfolio/Talk_Grid_Gulp4/', overlay:'<div class="img-container-overlay"></div>'},
    {id: 3, img: 'images/Wedding.jpg', href: 'https://nveretenko.github.io/Portfolio/wedding(bootstrap3)/'},
    {id: 4, img: 'images/Earth.png', href: 'https://nveretenko.github.io/Portfolio/Earth-Moon+Plane/', classImgContainer: 'img-container_feature', classImgContainerItem: 'img-container__item_feature'},
    {id: 5, img: 'images/night-work1.jpg', href: 'https://nveretenko.github.io/Portfolio/Certificate.gif'},
    {id: 6, img: 'images/night-work4.jpg', href: 'javascript:void(0);', order:'order-8'},
    {id: 7, img: 'images/Cat.jpg', href: 'https://nveretenko.github.io/Portfolio/Blog(adaptive)/'}
];

const popups = [
    {title: 'LoveFit', content: '<p>Bootstrap4, Gulp4, Carousel, svg-sprite...</p>'},
    {title: 'Talk_Bootstrap4_Gulp4', 'content': '<p>Bootstrap4, Gulp4, BEM, svg-sprite...</p>'},
    {title: 'Talk_Grid_Gulp4', 'content': '<p>Grid, Gulp4, BEM, svg-sprite...</p>'},
    {title: 'Wedding(<span>test</span>)', 'content': '<p>bootstrap3</p>'},
    {title: 'Earth-Moon(<span>test</span>)', 'content': '<p>Bootstrap4, Gulp4, Carousel, svg-sprite...</p>'},
    {title: 'Certificate', 'content': '<p>Certificate</p>'},
    {title: '<span>test</span>', 'content': '<p>development is not finished</p>'},
    {title: 'Blog(<span>test</span>)', 'content': '<p>flex, css grid, bem, responsive</p>'}
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
};

render();

document.addEventListener('click', event => {
    const id = event.target.dataset.id;
    const modal = $.modal(popups[id]);
    event.preventDefault();
    const description = event.target.dataset.description;

    if (description === 'description') {
        modal.open();
    }
});