// On page load, check if dark mode was previously enabled
window.onload = function() {
    let darkMode = localStorage.getItem('darkMode');

    // Apply dark mode if it was previously enabled
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
};

// The function to toggle dark mode and update the local storage
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Store the current state in local storage
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', null);
    }
}
