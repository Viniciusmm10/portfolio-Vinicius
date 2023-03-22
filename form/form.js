function validateFields() {
  const email = document.getElementById('email').value
  if (!email) {
    document.getElementById('recover-password-button').disabled = true
  } else if (validateEmail(email)) {
    document.getElementById('recover-password-button').disabled = false
  } else {
    document.getElementById('recover-password-button').disabled = true
  }
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

let containers = document.querySelectorAll('.input-box')
let inputs = document.querySelectorAll('.senha')
let icons = document.querySelectorAll('.toggle-icon')

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function () {
    containers[i].classList.toggle('visible')
    if (containers[i].classList.contains('visible')) {
      icons[i].src = 'assets/eye.svg'
      inputs[i].type = 'text'
    } else {
      icons[i].src = 'assets/eye-off.svg'
      inputs[i].type = 'password'
    }
  })
}

function goBack() {
  window.history.back()
}
