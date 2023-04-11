// define se os botões de login e "esqueci a senha" devem ficar ativos apenas se houver um email e senha válidos nos campos de input
function onChangeEmail() {
  toggleButtonDisable()
  toggleEmailError()
}

function onChangePassword() {
  toggleButtonDisable()
  togglePasswordError()
}

// verifica se o email inserido é válido
function isEmailValid() {
  const email = document.getElementById('email').value
  if (!email) {
    return false
  }
  return validateEmail(email)
}

// mostra/oculta o erro do email e verifica se o email inserido é válido
function toggleEmailError() {
  const email = document.getElementById('email').value
  const emailInvalidError = document.getElementById('email-invalid-error')

  if (validateEmail(email)) {
    emailInvalidError.style.display = 'none'
  } else {
    emailInvalidError.style.display = 'block'
  }
}

// mostra/oculta o erro da senha
function togglePasswordError() {
  const password = document.getElementById('password').value
  const passwordRequiredError = document.getElementById(
    'password-required-error'
  )

  if (!password) {
    passwordRequiredError.style.display = 'block'
  } else {
    passwordRequiredError.style.display = 'none'
  }
}

// verifica se a senha inserida é válida
function isPasswordValid() {
  const password = document.getElementById('password').value
  if (!password) {
    return false
  }
  return true
}

// verifica se o email e a senha inseridos são válidos e habilita/desabilita os botões de login e "esqueci a senha"
function toggleButtonDisable() {
  const emailValid = isEmailValid()
  const passwordValid = isPasswordValid()

  document.getElementById('recover-password-button').disabled = !emailValid
  document.getElementById('login-button').disabled =
    !emailValid || !passwordValid
}

// valida se o email inserido é válido
function validateEmail(email) {
  return /\S+@\S+.\S+/.test(email)
}

// adiciona interação ao botão onde mostra ou esconde a senha para o usuário
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

// define que o botão "voltar" volte a página anterior em que o usuário estava
function goBack() {
  window.history.back()
}
