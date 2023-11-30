let alphabet

async function getAlphabet() {

    let data = await fetch(`http://localhost:4000/all`)
        .then(res => res.json())
        .catch(e => console.log(e))

    if (data) {

        alphabet = data
        console.log(alphabet)

    }

}

async function getEncatamentos() {

    document.querySelector("#enchantment-table").classList.add("spin")

    setInterval(() => { document.querySelector("#enchantment-table").classList.remove("spin") }, 2500)

    let inputValue = document.querySelector("input").value
    let data = await fetch(`http://localhost:4000/letter-to-enchantment?text=${inputValue}`)
        .then(res => res.json())
        .catch(e => console.log(e))

    if (data) {

        document.querySelector(".encantamentos").innerHTML = ""

        data.map((img, index) => {

            document.querySelector(".encantamentos").innerHTML += `
                <div class="card">
                    <h3> ${inputValue[index] != " " ? inputValue[index] : '-'} </h3>
                    <img src='${img}'>
                </div>
            `

        })

    }

}

function letter(l) {

    document.querySelector(".encantamentos").innerHTML += `
    <div class="card">
        <h3> ${l} </h3>
    </div>
    `
}

document.querySelector("#enchantment-table").addEventListener("dragstart", (e) => {

    document.querySelector(".selectable-card").innerHTML = " "
    document.querySelector(".encantamentos").innerHTML = " "
    let alphabetKeys = Object.keys(alphabet)
    alphabetKeys.map((letter) => {

        document.querySelector(".selectable-card").innerHTML += `<div class="card" onclick='letter("${letter}")'><img src='${alphabet[letter]}'></div>`

    })

    if (document.querySelector("body").style.backgroundImage == `url("./Images/library.svg")`) {
        document.querySelector(".selectable-card").style.display = "none"
        document.querySelector("input").style.display = "inherit"
        document.querySelector("body").style.backgroundImage = `url("./Images/minecraftbg.jpg")`
    } else {
        document.querySelector(".selectable-card").style.display = "inherit"
        document.querySelector("input").style.display = "none"
        document.querySelector("body").style.backgroundImage = `url("./Images/library.svg")`
    }

})

document.addEventListener('keydown', (e) => {

    if (e.keyCode == 82) {
        if (document.querySelector("body").style.backgroundImage == `url("./Images/library.svg")`) {
            document.querySelector(".encantamentos").innerHTML = "<p></p>"
        }
    }

})

getAlphabet()