const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu ul li a');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        console.log('Menu button clicked');
        menu.classList.toggle('active');
    });
} else {
    console.error('menuBtn or menu not found');
}

function clearActive() {
    menuItems.forEach(item => item.classList.remove('active'));
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        clearActive();
        item.classList.add('active');

        // Only close menu on small screens
        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
        }
    });
});




// Basic form validation
const loginBtn = document.querySelector('.form .btn');
if(loginBtn){
    const emailInput = document.querySelector('.form input[type="email"]');
    const passwordInput = document.querySelector('.form input[type="password"]');

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(emailInput.value === '' || passwordInput.value === ''){
            alert('Please fill in both email and password fields.');
        } else {
            alert('Login successful!');
            // Here you can add further login logic
        }
    });
}
// Toggle password visibility
        const passwordToggle = document.querySelector('.password-toggle');
        const passwordField = document.querySelector('#password');
        
        passwordToggle.addEventListener('click', () => {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Toggle icon
            const icon = passwordToggle.querySelector('i');
            if (type === 'text') {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });