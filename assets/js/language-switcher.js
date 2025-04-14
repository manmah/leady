// Default language
let currentLang = 'en';

// Function to change the language
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Store the language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize language based on stored preference or browser default
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.substring(0, 2);
    const initialLang = storedLang || (browserLang === 'de' ? 'de' : 'en');
    changeLanguage(initialLang);
});