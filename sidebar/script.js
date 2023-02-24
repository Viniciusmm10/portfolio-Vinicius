const body = document.querySelector('body'),
  sidebar = body.querySelector('.sidebar'),
  toggle = body.querySelector('.toggle'),
  searchBtn = body.querySelector('.search-box')



toggle.addEventListener('mouseover', () => {
  sidebar.classList.toggle('close')
})
