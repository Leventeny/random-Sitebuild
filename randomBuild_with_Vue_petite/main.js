import './style.css'

import { createApp } from "https://unpkg.com/petite-vue?module";
createApp().mount('#validationForm');

import { toggleModal } from './js_files/modal-open-close.js'

import { registerAndValidateModal } from './js_files/modal-register-validate.js'

const init = () => {
  toggleModal()
  registerAndValidateModal()
}

document.body.addEventListener('DocumentContentLoaded', init());





