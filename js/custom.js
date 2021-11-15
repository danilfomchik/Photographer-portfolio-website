const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', function (e){
    e.preventDefault();
    this.classList.toggle('menu-btn_active');
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