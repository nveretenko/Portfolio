

function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('modal-wrap');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window">
            <div class="modal-body" data-content>
                <span class="modal-close" data-close="true">&times;</span>
                <h3 class="popup-title text-center">${options.title}</h3>
                <p>${options.content}</p>
            </div>
        </div>
    </div>
`);
    document.body.appendChild(modal);
    return modal
}

$.modal = function (options) {
    const ANIMATION_SPEED = 200;
    const $modal = _createModal(options);
    let closing = false;
    let destroyed = false;

    const modal = {
        open() {
            if (destroyed) {
                return false
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, ANIMATION_SPEED)
        },
    };

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    };

    $modal.addEventListener('click', listener);

    return Object.assign(modal, {
        destroy() {
            $modal.remove();
            $modal.removeEventListener('click', listener);
            destroyed = true;
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html;
        }
    })
};