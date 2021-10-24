export function registerAndValidateModal() {
  const emailField = document.getElementById('email');
  const button = document.getElementById('registrationButton')
  const response = document.getElementById('response')

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  button.addEventListener('click', function() {
    let email = emailField.value;
    console.log(email);
    if (validateEmail(email)) {
      response.innerHTML = 'Hiya this email will work for us';
    } else {
      response.innerHTML = 'Sorry, this email is not cool enough';
    }
  });
}