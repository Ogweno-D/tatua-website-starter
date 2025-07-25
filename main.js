// const navToggle = document.querySelector('.navToggle');
// const navigation = document.querySelector('.navigation');
// const toggleIcon = navToggle.querySelector('i');
//
// navToggle.addEventListener('click', (e) => {
//     navigation.classList.toggle('open');
//
//     // Toggle between bars and times
//     if(navigation.classList.contains('open')) {
//         toggleIcon.classList.remove('fa-bars');
//         toggleIcon.classList.add('fa-times');
//     } else{
//         toggleIcon.classList.remove('fa-times');
//         toggleIcon.classList.add('fa-bars');
//     }
// });

const purpleCheckbox = document.getElementById('purpleTheme');
const brownCheckbox = document.getElementById('brownTheme');
const fontSizeSlider = document.getElementById("fontSize");
const fontSizeValue = document.getElementById("fontSizeValue");
const body = document.body;


// save to the local Storage and load on reload
const savedFontSize = localStorage.getItem("fontSize");
const savedTheme = localStorage.getItem("theme");

if(savedFontSize){
    document.documentElement.style.setProperty("--fontSize", savedFontSize + "px");
    fontSizeSlider.value = savedFontSize;
    fontSizeValue.textContent = savedFontSize + 'px';
}

if(savedTheme){
    body.classList.add(savedTheme);
    if(savedTheme === "theme-purple") purpleCheckbox.checked = true;
    if(savedTheme === "brownTheme") brownCheckbox.checked = true;
}


fontSizeSlider.addEventListener('input', ()=>{
    const size = fontSizeSlider.value;
    document.documentElement.style.setProperty('--font-base', size + 'px');
    fontSizeValue.textContent = size + 'px';
    localStorage.setItem('fontSize', size);
});

purpleCheckbox.addEventListener('change', ()=>{
    if(purpleCheckbox.checked){
        brownCheckbox.checked = false;
        body.classList.remove("theme-brown");
        body.classList.add("theme-purple");
        localStorage.setItem("theme", 'theme-purple');
    } else {
        body.classList.remove("theme-purple");
        localStorage.removeItem("theme");
    }
});
brownCheckbox.addEventListener('change', ()=>{
    if(brownCheckbox.checked){
        purpleCheckbox.checked = false;
        body.classList.remove("theme-purple");
        body.classList.add("theme-brown");
        localStorage.setItem("theme", 'theme-brown');
    } else {
        body.classList.remove("theme-brown");
        localStorage.removeItem("theme");
    }
});

/// The customizer on scroll up should disappear

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = button.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        panel.classList.toggle('active');
    });
    });

document.addEventListener('click', (event) => {
    document.querySelectorAll('.slide-panel').forEach(panel => {
        const toggleButton = document.querySelector(`.toggle-button[data-target="${panel.id}"]`);
        if (
            !panel.contains(event.target) &&
            !toggleButton.contains(event.target)
        ) {
            panel.classList.remove('active');
        }
    });
});