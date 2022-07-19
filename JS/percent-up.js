let percent = 0;
let percentText = document.getElementById('percent');

function incrementPercent() {
    if (!(percent >= 100)) {
        percent += 1;
        percentText.innerText = percent + "%";
    }
}

setInterval(incrementPercent, 40);
