

const items = [
  {
    id: 8,
    title: 'Blog',
    content: '<p>Angular-12, PWA, Firebase</p>',
    img: 'images/Angular.png',
    href: 'https://angular-blog-75c7e.web.app/',
    target: '_blank',
    overlay: '<div class="img-container-overlay"></div>'
  },

  {
    id: 7,
    title: 'myOrganizer',
    content: '<p>Angular-12</p>',
    img: 'images/Angular.png',
    href: 'https://webset.zzz.com.ua/myOrganizer/',
    target: '_blank',
    overlay: '<div class="img-container-overlay"></div>'
  },

  {
    id: 2,
    title: 'Violis-Hotel',
    content: '<p>Angular-10, PWA, backend:частично</p>',
    img: 'images/Angular.png',
    href: 'https://violis-test.zzz.com.ua/',
    target: '_blank',
    overlay: '<div class="img-container-overlay"></div>',
  },

  {
    id: 4,
    title: 'СММ<span>щик</span>',
    content: '<p>Flex, Grid, Gulp4, Animation, adaptive, svg-sprite...</p>',
    img: 'images/mentor-1.jpg',
    href: 'https://nveretenko.github.io/SMM/build/',
    target: '_blank',
  },

  {
    id: 6,
    title: 'SteelTime',
    content: '<p>Bootstrap5, Flex, Gulp4, adaptive, svg-sprite...</p>',
    img: 'images/steeltime.jpg',
    href: 'https://webset.zzz.com.ua/steeltime/ru/',
    target: '_blank',
  },

  {
    id: 1,
    title: 'LoveFit',
    content: '<p>Bootstrap4, Gulp4, Carousel, svg-sprite...</p>',
    img: 'images/gym-10.jpg',
    href: 'https://nveretenko.github.io/LoveFit/build/',
    target: '_blank',
    order: 'order-md-3 order-lg-0',
  },

  {
    id: 5,
    title: 'Earth-Moon(<span>test</span>)',
    content: '<p>simple animation</p>',
    img: 'images/Earth.png',
    href: 'https://nveretenko.github.io/Earth-Moon-Plane/',
    target: '_blank',
    classImgContainer: 'img-container_feature',
    classImgContainerItem: 'img-container__item_feature',
  },
  
  {
    id: 3,
    title: 'Test',
    content: '<p>test...</p>',
    img: 'images/night-work4.jpg',
    href: '#'
  }
]

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
                    <a href="${item.href}" target="${item.target || ''}">View site</a>
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
