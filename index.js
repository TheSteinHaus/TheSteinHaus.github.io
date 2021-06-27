function changeTheme(check) {
    let chbox;
    chbox = document.getElementById('toggler');

    if (chbox.checked) {
        th = 'dark';
        // document.querySelector("#theme > option[selected]").removeAttribute("selected");
        // document.querySelector("#theme > option[value='dark']").setAttribute("selected", "selected");
    }
    else {
        th = 'light';
        // document.querySelector("#theme > option[selected]").removeAttribute("selected");
        // document.querySelector("#theme > option[value='light']").setAttribute("selected", "selected");
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