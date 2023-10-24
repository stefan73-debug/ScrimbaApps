let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment_btn() {
    count += 1
    countEl.textContent = count
}

function savebtn() {
    let newCount = count + " - "
    //let Count = newCount
    saveEL.textContent += newCount
    countEl.textContent = 0
    count = 0
}

