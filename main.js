const form = document.querySelector('.form');
const input = document.querySelector('input');
const button = document.querySelector('button');

const ERROR_EMPTY = 'Whoops! It looks like you forgot to add your email';
const ERROR_INVALID = 'Please provide a valid email address';

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const setErrorEmpty = () => {
    form.classList.add('error');
    form.dataset.errorMessage = ERROR_EMPTY;
}

const setErrorInvalid = () => {
    form.classList.add('error');
    form.dataset.errorMessage = ERROR_INVALID;
}

const clearError = () => {
    form.classList.remove('error');
    delete form.dataset.errorMessage;
}

button.addEventListener('click', () => {
    const email = input.value;
    if (email.length == 0) {
        setErrorEmpty();
    } else if (!isValidEmail(email)) {
        setErrorInvalid();
    } else {
        clearError();
    }
})

// let timeout = null;
// input.addEventListener('input', (e) => {
//     const email = e.target.value;

//     if (timeout) {
//         clearTimeout(timeout);
//         clearError();
//     }

//     timeout = setTimeout(() => {
//         if (email.length == 0) {
//             setErrorEmpty();
//         } else if (!isValidEmail(email)) {
//             setErrorInvalid();
//         } else {
//             clearError();
//         }
//     }, 500)
// }); 