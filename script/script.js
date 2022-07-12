// dark mode

const btn = document.querySelector(".darkmode-btn");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {

    document.body.classList.toggle("dark-theme");
}
else if (currentTheme == "light") {

    document.body.classList.toggle("light-theme");

}

btn.addEventListener("input", function () {

    if (prefersDarkScheme.matches) {

        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";

    }
    else {

        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";

    }
    localStorage.setItem("theme", theme);

});

// Side bar collapse

document.querySelector('#collapse-btn').addEventListener('click', function() {

    document.querySelector('.collapse-element.collapsible').classList.toggle('collapsed');
    document.querySelector('.collapse-btn.rotate').classList.toggle('rotated');

});

// scrollspy

window.addEventListener('DOMContentLoaded', () => {

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
    });

});

document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
});

});

// scroll nav

if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {

let observer = new IntersectionObserver(entries => {

    if (entries[0].boundingClientRect.y < 0) {

        document.body.classList.add("nav-scroll");

    }
    else {

        document.body.classList.remove("nav-scroll");

    }

});

observer.observe(document.querySelector("#trigger-anchor"));

}

// toast

function CustToast() {
    var x = document.getElementById("snack");

    x.className = "visible";

    setTimeout(function() { 
        x.className = x.className.replace("visible", "");
    }, 2000);
}

// code copy

function copyfunc(code) {
    var copyText = document.getElementById(code);

    navigator.clipboard.writeText(copyText.innerHTML);
}

// clock

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ddn = date.getDate();
    let dd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
    let MM = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jui', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
    let session = "AM";

    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
        
    let time = dd + " " + MM  + " " + ddn +" " + hh + ":" + mm + " " + session;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();