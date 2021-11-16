//mobile menu animation
const menuBtn = document.getElementById('menu-btn');
const sections = document.querySelectorAll('.section');
const menu_ul = document.querySelector('.menu-ul');
const links = document.querySelectorAll('.menu-ul_item-link');
const header = document.querySelector('header');


//mobile menu animation
menuBtn.addEventListener('click', function (e){
    e.preventDefault();
    this.classList.toggle('menu-btn_active');
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
    threshold: 0.5,
})

sections.forEach(section => observer.observe(section))

//active menu item by click
menu_ul.addEventListener('click', (event) => {
    if(event.target.classList.contains('menu-ul_item')){
        event.preventDefault();

        const menu_item = event.target;
        const sectionId = menu_item.querySelector('a').getAttribute('href').replace('#', '');

        
        window.scrollTo({
            top: document.getElementById(sectionId).offsetTop - header.offsetHeight - 20,
            behavior: 'smooth',
        })
    }
})

//slick slider
$('.customer-coments-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    // variableWidth: true
});