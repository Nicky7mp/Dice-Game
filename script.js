
const rollButton = document.getElementById("roll")

rollButton.addEventListener("click", () => {
    const diceSides = 6
    let randomNumber = Math.floor(Math.random() * diceSides) + 1

    console.log(randomNumber)
    return randomNumber
})

