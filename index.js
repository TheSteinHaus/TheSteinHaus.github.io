function changeTheme(check) {
    let chbox, resolution, chbox1;
    resolution = window.innerWidth;
    chbox = document.getElementById('toggler');
    chbox1 = document.getElementById('toggler1');
    // alert(resolution)

    if (resolution < 1000) {
        if (chbox.checked) {
            th = 'dark';
            document.querySelector("#theme1 > option[selected]").removeAttribute("selected");
            document.querySelector("#theme1 > option[value='dark']").setAttribute("selected", "selected");
            document.querySelector("#theme > option[selected]").removeAttribute("selected");
            document.querySelector("#theme > option[value='dark']").setAttribute("selected", "selected");
            
        }
        else {
            th = 'light';
            document.querySelector("#theme1 > option[selected]").removeAttribute("selected");
            document.querySelector("#theme1 > option[value='light']").setAttribute("selected", "selected");
            document.querySelector("#theme > option[selected]").removeAttribute("selected");
            document.querySelector("#theme > option[value='light']").setAttribute("selected", "selected");
        }
    }
    else {
        if (chbox1.checked) {
            th = 'dark';
            document.querySelector("#theme1 > option[selected]").removeAttribute("selected");
            document.querySelector("#theme1 > option[value='dark']").setAttribute("selected", "selected");
            document.querySelector("#theme > option[selected]").removeAttribute("selected");
            document.querySelector("#theme > option[value='dark']").setAttribute("selected", "selected");
        }
        else {
            th = 'light';
            document.querySelector("#theme1 > option[selected]").removeAttribute("selected");
            document.querySelector("#theme1 > option[value='light']").setAttribute("selected", "selected");
            document.querySelector("#theme > option[selected]").removeAttribute("selected");
            document.querySelector("#theme > option[value='light']").setAttribute("selected", "selected");
        }
    }
    
    check = th;

    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${check}`);
}

document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#theme").addEventListener("change", function() {
        changeTheme(this.value);
   });
});