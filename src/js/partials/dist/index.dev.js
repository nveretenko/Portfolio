"use strict";

var items = [{
  id: 2,
  title: 'Violis-Hotel',
  content: '<p>Angular-10, PWA, backend:частично</p>',
  img: 'images/Angular.png',
  href: 'https://violis-test.zzz.com.ua/',
  target: '_blank',
  overlay: '<div class="img-container-overlay"></div>'
}, {
  id: 1,
  title: 'LoveFit',
  content: '<p>Bootstrap4, Gulp4, Carousel, svg-sprite...</p>',
  img: 'images/gym-10.jpg',
  href: 'https://nveretenko.github.io/Portfolio/LoveFit',
  target: '_blank',
  order: 'order-md-3 order-lg-0'
}, {
  id: 3,
  title: 'Talk_Grid_Gulp4',
  content: '<p>Grid, Gulp4, BEM, svg-sprite...</p>',
  img: 'images/top-banner_mobile.png',
  href: 'https://nveretenko.github.io/Portfolio/Talk_Grid_Gulp4/',
  target: '_blank',
  overlay: '<div class="img-container-overlay"></div>'
}, {
  id: 4,
  title: 'СММ<span>щик</span>',
  content: '<p>Flex, Grid, Gulp4, Animation, adaptive, svg-sprite...</p>',
  img: 'images/mentor-1.jpg',
  href: 'https://nveretenko.github.io/Portfolio/SMM',
  target: '_blank'
}, {
  id: 5,
  title: 'Earth-Moon(<span>test</span>)',
  content: '<p>simple animation</p>',
  img: 'images/Earth.png',
  href: 'https://nveretenko.github.io/Portfolio/Earth-Moon+Plane/',
  target: '_blank',
  classImgContainer: 'img-container_feature',
  classImgContainerItem: 'img-container__item_feature'
}, {
  id: 6,
  title: 'SteelTime',
  content: '<p>Bootstrap5, Flex, Gulp4, adaptive, svg-sprite...</p>',
  img: 'images/steeltime.jpg',
  href: 'https://webset.zzz.com.ua/steeltime/ru/',
  target: '_blank'
}, {
  id: 7,
  title: '<span>test</span>',
  content: '<p>development is not finished</p>',
  img: 'images/night-work4.jpg',
  href: 'javascript:void(0);',
  order: 'order-8'
}, {
  id: 8,
  title: '<span>test</span>',
  content: '<p>development is not finished</p>',
  img: 'images/night-work1.jpg',
  href: 'javascript:void(0);'
}];

var toHTML = function toHTML(item) {
  return "\n        <div class=\"col-md-6 col-lg-3 ".concat(item.order || '', "\">\n            <div class=\"row__item\">\n            ").concat(item.overlay || '', "\n                <div class=\"img-container ").concat(item.classImgContainer || '', "\">\n                    <img class=\"img-container__item ").concat(item.classImgContainerItem || '', "\" src=\"").concat(item.img, "\" alt=\"\" />\n                </div>\n                <div class=\"work\">\n                    <h3 class=\"work-title\">Title of Work</h3>\n                    <p>Website development</p>\n                    <a data-description=\"description\" data-id=\"").concat(item.id, "\" href=\"#\">Description</a>\n                    <a href=\"").concat(item.href, "\" target=\"").concat(item.target || '', "\">View site</a>\n                </div>\n            </div>\n        </div>\n");
};

function render() {
  var html = items.map(toHTML).join('');
  document.querySelector('#items').innerHTML = html;
}

render();
var modal = $.modal({
  width: '400px'
});
document.addEventListener('click', function (event) {
  var id = +event.target.dataset.id;
  var description = event.target.dataset.description;

  if (description === 'description') {
    event.preventDefault();
    var item = items.find(function (item) {
      return item.id === id;
    });
    modal.setContent("\n            <span class=\"modal-close\" data-close=\"true\">&times;</span>\n            <h3 class=\"modal-title text-center\">".concat(item.title, "</h3>\n            ").concat(item.content, "\n        "));
    modal.open();
  }
});
//# sourceMappingURL=index.dev.js.map
