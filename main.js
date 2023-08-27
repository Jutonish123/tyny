//слайдер
function swiperCard() {
  if (window.innerWidth > 810) { views = 2 }
  else { views = 1 } 
  new Swiper(".swiper", {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: views,
  });
}
swiperCard();
window.addEventListener("resize", swiperCard);

//форма с валидацией
function valid_form(){
  let name = document.getElementById('form-name').value
  let email = document.getElementById('form-email').value
  let message = document.getElementById('form-message').value
  document.getElementById('form-name').style.borderColor = '#fff'
  document.getElementById('form-email').style.borderColor = '#fff'
  document.getElementById('form-message').style.borderColor = '#fff'
  ok = true
  if (name == '' || name == null){
      document.getElementById('form-name').style.borderColor = '#f00'
      ok = false
  } if (email.indexOf('@') == -1){
      document.getElementById('form-email').style.borderColor = '#f00'
      ok = false
  } if (message == ''){
      document.getElementById('form-message').style.borderColor = '#f00'
      ok = false
  } 
  if (ok) {
      console.log(`${name} | ${email}\n-> ${message}\n\n`)
      document.getElementById('form-message').value = ''
  }
}

//бургер
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}