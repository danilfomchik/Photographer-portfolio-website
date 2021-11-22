//mobile menu animation
const body = document.querySelector('body');
const menuBtn = document.getElementById('menu-btn');
const sections = document.querySelectorAll('.section');
const menu_ul = document.querySelectorAll('.menu-ul');
const links = document.querySelectorAll('.menu-ul_item-link');
const header = document.querySelector('header');
const letsChat_btns = document.querySelectorAll('.lets-chat');
const popUp = document.querySelector('.pop_up');
const popUpContainer = document.querySelector('.pop_up-container');
const popUpBody = document.querySelector('.pop_up-body');
const closePopUp_btn = document.querySelector('.close_pop-up');
const getInTouchSubmit = document.querySelector('.get-in-touch__submit');
const myForm = document.querySelector('.get-in-touch__form');


//hide form after sending
getInTouchSubmit.addEventListener('click', () => {
    popUp.style.display = 'none';
    body.style.overflow = 'auto';

    popUpBody.classList.remove('pop_up-visible');
    popUpBody.classList.add('pop_up-hidden');

    setTimeout(formReset, 2000);
})

function formReset() {
    myForm.reset();
}

//show popup
letsChat_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        myForm.reset();

        body.style.overflow = 'hidden';
        popUp.style.display = 'block';
        
        popUpBody.classList.remove('pop_up-hidden');
        popUpBody.classList.add('pop_up-visible');
    })
})

//close popup
closePopUp_btn.addEventListener('click', closePopUp);

//close popup by click ESC
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        closePopUp(e);
    }
})

//close popup by clicking overlay
popUpContainer.addEventListener('click', (e) => {
    if(e.target == popUpContainer){
        closePopUp(e);
    }
})

//close popup func
function closePopUp(e){
    e.preventDefault();

    body.style.overflow = 'auto';
    popUp.style.display = 'none';

    popUpBody.classList.remove('pop_up-visible');
    popUpBody.classList.add('pop_up-hidden');
}

//mobile menu animation
const mobileMenu = document.querySelector('.menu-ul');
const mobileMenu_links = document.querySelectorAll('.menu-ul_item');

menuBtn.addEventListener('click', function (e){
    e.preventDefault();
    this.classList.toggle('menu-btn_active');

    mobileMenu.classList.toggle('open');
})

//active menu item by scrolling page
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            links.forEach((link) => {
                const sectionId = link.getAttribute('href').replace('#', '');
                const menu_item = link.closest('li');

                menu_item.classList.toggle(
                    'active_menu-item', 
                    sectionId === entry.target.id
                );
            })
        }
    })
}, {
    threshold: 0.4,
})

sections.forEach(section => observer.observe(section))

//active menu item by click
menu_ul.forEach((ul) => {
    ul.addEventListener('click', (event) => {
        if(event.target.classList.contains('menu-ul_item')){
            event.preventDefault();
            menuBtn.classList.toggle('menu-btn_active');
            mobileMenu.classList.toggle('open');

            const menu_item = event.target;
            const sectionId = menu_item.querySelector('a').getAttribute('href').replace('#', '');

            
            window.scrollTo({
                top: document.getElementById(sectionId).offsetTop - header.offsetHeight - 20,
                behavior: 'smooth',
            })
        }
    })
})


//slick slider
$('.customer-coments-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true
});