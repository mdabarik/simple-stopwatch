

let counter = 0;
let interval = 1;
document.getElementById('btn-start').addEventListener('click', function() {
    // select counter
    const element = document.getElementById('counter-display');
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    interval = setInterval(() => {
        element.innerText = counter++;
        if (counter != 0) {
            document.getElementById('btn-start').classList.add("btn-disabled")
        }
    }, 1000)
})


document.getElementById('btn-pause').addEventListener('click', function() {
    clearInterval(interval)
    document.getElementById('btn-start').classList.remove("btn-disabled")
})


document.getElementById('btn-reset').addEventListener('click', function() {
    document.getElementById('counter-display').innerText = 0;
    clearInterval(interval);
    counter = 0;
    document.getElementById('btn-start').classList.remove("btn-disabled")
})