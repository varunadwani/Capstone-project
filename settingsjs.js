document.querySelector('button').onclick = function(e) {
    e.preventDefault();
    let settings = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        theme: document.getElementById('theme').value,
        language: document.getElementById('language').value,
        emailNotif: document.getElementById('emailNotif').checked,
        siteNotif: document.getElementById('siteNotif').checked
    };

    // Store each property as string
    localStorage.setItem('gtaSettings_username', settings.username);
    localStorage.setItem('gtaSettings_email', settings.email);
    localStorage.setItem('gtaSettings_theme', settings.theme);
    localStorage.setItem('gtaSettings_language', settings.language);
    localStorage.setItem('gtaSettings_emailNotif', settings.emailNotif);
    localStorage.setItem('gtaSettings_siteNotif', settings.siteNotif);
    
    alert('Settings Saved! 🎮');
};

document.getElementById('theme').onchange = function() {
    changeTheme(this.value);
};

function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
}