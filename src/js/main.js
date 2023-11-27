

const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme(){
const currentTheme = rootHtml.getAttribute("data-theme");

//Podemos llamar el cambio de theme de este modo

currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

//Y tambien podemos hacerlo de este modo  
//(comentar alternativamente para demostrarlo)

if(currentTheme === "dark") rootHtml.setAttribute("data-theme", "light");
else rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-brightness-high")
    toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);