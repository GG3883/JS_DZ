function gmailCheck() {
    const gmail = document.getElementById('gmail').value
    const result = document.getElementById('result')
    const regEx = /^[\w.-]+@gmail\.com$/;

    if (regEx.test(gmail)) {
        result.textContent = 'Email is correct'
    } else {
        result.textContent = 'Email not correct'
    }
}

const min = document.getElementById('minBlock')

let position = 0
let move = "center"
let animID

function moveMinBlock() {
    if (position === 225) {
        clearTimeout(animID)
        return
    }
    if (move === "center") {
        position += 1
    } else {
        position -= 1
    }
    min.style.left = `${position}px`
    min.style.top = `${position}px`
    animID = setTimeout(moveMinBlock, 75)
}
moveMinBlock()