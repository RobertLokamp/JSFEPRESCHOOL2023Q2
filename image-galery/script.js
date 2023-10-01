const imgGallery = document.querySelector('.img-gallery');
const input = document.querySelector('.header__input');
const clearBtn = document.querySelector('.header__clear-btn');
const searchBtn = document.querySelector('.header__search-btn');

async function showImages(data) {
    if (imgGallery) {
        imgGallery.innerHTML = '';
    }
    data.forEach((item) => {
        const img = document.createElement('img');
        img.classList.add('img-gallery__item');
        img.src = item.urls.small + '&w=1366&h=768&quot';
        img.alt = item.alt_description;
        img.onload = () => imgGallery.appendChild(img);
    })
};

async function fetchImages(query = 'photo') {
    try {
        let url = `https://api.unsplash.com/search/photos?per_page=30&query=${query}&client_id=YUometkW5uN0xfH8kb8HIU54QPMiaEDavgZ9H18_qP4`;
        const response = await fetch(url);
        const data = await response.json();
        let photos = data.results;
        console.log('data', photos);
        await showImages(photos);
    } catch (error) {
        console.log(error);
    }
};

input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        let query = input.value;
        fetchImages(query);
    }
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let query = input.value;
    fetchImages(query);
});

clearBtn.addEventListener('click', () => {
    input.value = '';
    input.focus();
});

fetchImages();

input.focus();
