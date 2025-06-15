const navA = document.querySelector('.navLink');
navA.classList.add('hide');

function toggleMenu() {
    navA.classList.toggle('hide');
}

const menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', toggleMenu);


function handleResize(width) {
    if (window.innerWidth > width) {
        navA.classList.remove('hide');
    } else {
        navA.classList.add('hide');
    }
}

handleResize(1000); // execute when the page load
window.addEventListener('resize', () => handleResize(1000));


function viewerTemplate(event) {
    const imgBox = event.target.closest('img');
    if (imgBox) {
        const src = imgBox.getAttribute('src');
        const alt = imgBox.getAttribute('alt')
        const fileName = src.split('/').pop();
        const fullPictureSrc = 'images/' + fileName.split('-')[0] + '-full.jpeg';
        return [fullPictureSrc, alt];
    }
}

function showModal(event) {

    const modal = document.createElement('dialog');
    modal.innerHTML = '<img><button class="close-viewer">X</button>';

    const [src, alt] = viewerTemplate(event);

    modal.querySelector('img').setAttribute('src', src);
    modal.querySelector('img').setAttribute('alt', alt);

    document.body.appendChild(modal);

    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', () => modal.remove());

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.remove();
        }
    });
}


const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', (event) => {
    if (event.target.closest('img')) {
        showModal(event);
    }
});

