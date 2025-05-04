const themeSelector = document.querySelector('select');
const logo = document.querySelector('img');


function changeTheme() {
    let currentTheme = themeSelector.value;

    if (currentTheme == 'dark'){
        document.body.className = 'dark';
        document.querySelector('#subtitle').className = 'lighterBlue';  
        logo.setAttribute('src', 'byui-logo_white.png');
    } else {
        document.body.removeAttribute('class');
        document.querySelector('#subtitle').removeAttribute('class');
        logo.setAttribute('src', 'byui-logo_blue.webp');
    }
};

themeSelector.addEventListener('change', changeTheme);