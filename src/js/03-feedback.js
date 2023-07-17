import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formDataLs = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input[name="email"]'),
  textArea: document.querySelector('.feedback-form textarea[name="message"]')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

fillFormFields();

function onFormInput(evt) {
  const input = evt.target;
  formDataLs[input.name] = input.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataLs));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  const mail = formElements.email.value;
  const message = formElements.message.value;
  if (mail === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    console.log(formDataLs);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function fillFormFields() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.emailInput.value = savedData.email || '';
    refs.textArea.value = savedData.message || '';
  }
}






// import throttle from 'lodash.throttle';


// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     emailInput: document.querySelector('.feedback-form input[name="email"]'),
//     textarea: document.querySelector('.feedback-form textarea[name="message"]')
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
// refs.form.addEventListener('input', onAllInput);

// gettingLocalStorageText();

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY)
//      console.log(formData)

// };

// function onTextAreaInput(evt) {
//     const message = evt.target.value;
//    localStorage.setItem(STORAGE_KEY, message)
    
// };

// function gettingLocalStorageText() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     };
    
// }

// function onAllInput(evt) {
//     formData[evt.target.name] = evt.target.value;

// }