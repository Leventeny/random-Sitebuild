import './style.css'

import { createApp } from "https://unpkg.com/petite-vue?module";
createApp().mount('#validationForm');

const registrationButton = document.querySelector('.registrationButton');

registrationButton.addEventListener('click', () => {
    console.log('Hmm strange');
})




