const currentTheme = "dark"

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);toggleSwitch.checked = false;