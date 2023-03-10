let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (navbar.classList.contains('active')) {
      navbar.style.display = 'none'
      navbar.classList.remove('active')
      menuIcon.classList.toggle('bx-x')
    }
  })
})

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
  if (navbar.classList.contains('active')) {
    navbar.style.display = 'block'
  } else {
    navbar.style.display = 'none'
  }
}

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
}

let header = document.querySelector('header')
let menuicon = document.querySelector('#menu-icon')
let nav = document.querySelector('.navbar')

header.classList.toggle('sticky', window.scrollY > 100)

menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
