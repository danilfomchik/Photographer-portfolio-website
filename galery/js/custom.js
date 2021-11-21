const imagesData = './pictures.json';

async function getImages(url){
    let fetchData = fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                alert('Whoops! Something went wrong!')
            }
            return Promise.resolve(response)
        })
        .then((url) => {
            return url.json();
        })
    var result = await fetchData;

    ////////////////////////////////////////////
    render(result)

    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('.gallery-item');
    const overlay = document.querySelector('.overlay');
    const overlayInner = document.querySelector('.overlay-inner');
    const overlayImage = document.querySelector('.overlay-inner img');

    buttons.forEach(button => {
        button.addEventListener('click', open)
    });
    overlay.addEventListener('click', close);

    
    function open(e) {
        overlay.classList.add('open');
        body.style.overflow = 'hidden';

        const img = e.currentTarget,
        style = img.currentStyle || window.getComputedStyle(img, false),
        url = style.backgroundImage.slice(4, -1).replace(/"/g, "");

        overlayImage.src = url;

        if(overlayInner.offsetHeight < window.innerHeight){
            overlayInner.offsetWidth = overlayImage.offsetWidth;
        } else if(overlayInner.offsetHeight > window.innerHeight){
            overlayImage.style.height = `${444}px`
        }
    }

    function close() {
        overlay.classList.remove('open');
        body.style.overflow = 'auto';
    }
    ////////////////////////////////////////////
}
getImages(imagesData);

function render(obj) {
    const gallerySection = document.querySelector('.gallery-section');

    obj.forEach(img => {
        let renderedBlock = `
            <div style="background-image:${img.background}" class="gallery-item ${img.id}">
                <div class="grid-overlay">
                    <button class="view-button">View</button>
                </div>
            </div>
        `;

        gallerySection.innerHTML += renderedBlock;
    })

    const buttons = document.querySelectorAll('.gallery-item');
    console.log(buttons);
}
