const body = document.querySelector("body")
const input = document.querySelector("input")
const encantamentos = document.querySelector(".encantamentos")
const selectableCard = document.querySelector(".selectable-card")
const enchantmentTable = document.querySelector("#enchantment-table")
let imagesAndCodes
let code = "";
let canSpin = true;

async function getAlphabet() {

    let data = await fetch(`http://localhost:4000/images-codes`)
        .then(res => res.json())
        .catch(e => console.log(e))

    if (data) {

        imagesAndCodes = data
        console.log(imagesAndCodes)

    }

}

async function letterToEnchant() {
    let inputValue = input.value
    let data = await fetch(`http://localhost:4000/letter-to-enchantment?text=${inputValue}`)
        .then(res => res.json())
        .catch(e => console.log(e))

    if (data) {

        data.map((data, index) => {
            encantamentos.innerHTML +=
                `
                <div class="card">
                
                    <img src="${data}">
                    <p>${inputValue[index]}</p>

                </div>
            `
        })

    }
}

async function concatCode(c, img) {
    code += c

    if(encantamentos.innerHTML.includes("<h2>")){
        encantamentos.innerHTML = `` 
    }

    encantamentos.innerHTML += `
        
        <div class="card">
    
            <img src="${img}">

        </div>

    `
}

async function enchantToLetter() {

    let data = await fetch(`http://localhost:4000/code-to-caracter?codes=${code}`)
        .then(res => res.json())
        .catch(e => console.log(e))

    if (data) {
        console.log(data)
        code = ""
        encantamentos.innerHTML = ""

        for (let index = 0; index < data.data.length; index++) {
            console.log(data.data[index])
            encantamentos.innerHTML +=
                `
                <div class="card">
                
                    <h2>${data.data[index]}</h2>

                </div>
            `
        }

    }

}

enchantmentTable.addEventListener("dragstart", (e) => {

    if (canSpin) {
        canSpin = false;
        let onclick = enchantmentTable.attributes["onclick"].nodeValue
        enchantmentTable.classList.add("spin")

        if (onclick == "letterToEnchant()") {

            enchantmentTable.removeAttribute("onclick")
            enchantmentTable.setAttribute("onclick", `enchantToLetter()`)
            encantamentos.innerHTML = ""
            selectableCard.innerHTML = ""

            console.log(imagesAndCodes)
            let codes = Object.values(imagesAndCodes)
            let images = Object.keys(imagesAndCodes)

            setTimeout(() => {
                body.style.background = "url(./Images/bookshelf.jpeg)"
                enchantmentTable.src = "./Images/book stand.png"
                input.style.display = "none"

                images.map((img, index) => {

                    selectableCard.innerHTML += `
        
                        <div class="card" onclick="concatCode(${codes[index]}, '${img}')">
                        
                            <img src="${img}">
        
                        </div>
        
                    `

                })

            }, 1250)
        } else {

            enchantmentTable.removeAttribute("onclick")
            enchantmentTable.setAttribute("onclick", `letterToEnchant()`)
            encantamentos.innerHTML = ""
            selectableCard.innerHTML = ""

            setTimeout(() => {
                body.style.background = "url(./Images/minecraftbg.jpg)"
                enchantmentTable.src = "./Images/enchantment table.png"
                input.style.display = "inherit"
            }, 1250)
        }
        setTimeout(() => {
            enchantmentTable.classList.remove("spin")
            canSpin = true;
        }, 2500);
    }
})

document.addEventListener('keydown', (e) => {

})

getAlphabet()