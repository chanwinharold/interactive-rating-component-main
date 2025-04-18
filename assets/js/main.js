const form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const radios = document.querySelectorAll(".container input")
    radios.forEach((radio) => {
        if (radio.checked) {
            const ratingElement = document.querySelector(".modal__info span")
            ratingElement.innerText = parseInt(radio.value)

            event.target.style.display = "none"
            const modalElement = document.querySelector(".modal")
            modalElement.style.display = "flex";
            modalElement.ariaHidden = "false";
        }
    })
})