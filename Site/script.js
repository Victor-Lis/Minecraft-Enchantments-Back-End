let alphabet

async function getAlphabet(){

    let data = await fetch(`http://localhost:4000/all`)
    .then(res => res.json())
    .catch(e => console.log(e))

    if(data){

        alphabet = data
        console.log(alphabet)

    }

}

async function getEncatamentos(){

    document.querySelector("#enchantment-table").classList.add("spin")

    setInterval(() => {document.querySelector("#enchantment-table").classList.remove("spin")}, 2500)

    let inputValue = document.querySelector("input").value
    let data = await fetch(`http://localhost:4000/letter-to-enchantment?text=${inputValue}`)
    .then(res => res.json())
    .catch(e => console.log(e))

    if(data){

        document.querySelector(".encantamentos").innerHTML = ""

        data.map((img, index) => {

            document.querySelector(".encantamentos").innerHTML += `
                <div class="card">
                    <h3> ${inputValue[index]} </h3>
                    <img src='${img}'>
                </div>
            `

        })

    }

}

getAlphabet()