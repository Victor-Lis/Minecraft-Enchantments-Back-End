const body = document.querySelector("body")
const input = document.querySelector("input")
const encantamentos = document.querySelector(".encantamentos")
const selectableCard = document.querySelector(".selectable-card")
const enchantmentTable = document.querySelector("#enchantment-table")
let alphabet
let enchantmentTraduct = ""

async function getAlphabet() {

    let data = await fetch(`http://localhost:4000/all`)
        .then(res => res.json())
        .catch(e => console.log(e))

    if (data) {

        alphabet = data
        // console.log(alphabet)

    }

}

async function getEncatamentos() {

    if (!enchantmentTable.classList.contains("spin")) {

        if (body.style.backgroundImage != `url("./Images/bookshelf.jpeg")`) {
            enchantmentTable.classList.add("spin")

            setInterval(() => { enchantmentTable.classList.remove("spin") }, 2500)

            const regex = new RegExp("[\\W]", "g");

            // Verifique se o texto digitado pelo usuário contém caracteres especiais
            if (regex.test(input.value)) {
                // Impeça que o texto seja inserido no campo do formulário
                input.value = input.value.replace(regex, "");
                alert("Não utilize caractéres especiais!")
            } else {

                let inputValue = input.value
                let data = await fetch(`http://localhost:4000/letter-to-enchantment?text=${inputValue}`)
                    .then(res => res.json())
                // .catch(e => console.log(e))

                if (data) {

                    encantamentos.innerHTML = ""

                    data.map((img, index) => {

                        encantamentos.innerHTML += `
                <div class="card">
                    <h3> ${inputValue[index] != " " ? inputValue[index] : '-'} </h3>
                    <img src='${img}'>
                </div>
            `

                    })

                }

            }
        } else {
            enchantmentTable.classList.add("spin")

            setInterval(() => { enchantmentTable.classList.remove("spin") }, 2500)

            encantamentos.innerHTML = enchantmentTraduct
            enchantmentTraduct = "";
        }
    }

}

function letter(l) {

    enchantmentTraduct += `
    <div class="card">
        <h3> ${l} </h3>
    </div>
    `
}

enchantmentTable.addEventListener("dragstart", (e) => {

    enchantmentTraduct = ""
    selectableCard.innerHTML = " "
    encantamentos.innerHTML = " "
    let alphabetKeys = Object.keys(alphabet)
    alphabetKeys.map((letter) => {

        selectableCard.innerHTML += `<div class="card" onclick='letter("${letter}")'><img src='${alphabet[letter]}'></div>`

    })

    if (body.style.backgroundImage == `url("./Images/bookshelf.jpeg")`) {
        enchantmentTable.classList.add("trading")
        setTimeout(() => {

            enchantmentTable.src = "./Images/enchantment table.png"

        }, 62.5)
        selectableCard.style.display = "none"
        input.style.display = "inherit"
        body.style.backgroundImage = `url("./Images/minecraftbg.jpg")`
    } else {
        enchantmentTable.classList.add("trading")
        setTimeout(() => {

            enchantmentTable.src = "./Images/book stand.png"

        }, 62.5)
        selectableCard.style.display = "inherit"
        input.style.display = "none"
        body.style.backgroundImage = `url("./Images/bookshelf.jpeg")`
    }


    setTimeout(() => {

        enchantmentTable.classList.remove("trading")

    }, 125)
})

document.addEventListener('keydown', (e) => {

    if (e.keyCode == 82) {
        if (body.style.backgroundImage == `url("./Images/bookshelf.jpeg")`) {
            encantamentos.innerHTML = "<p></p>"
        }
    }

})

getAlphabet()