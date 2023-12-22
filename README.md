
### Declaração dos objetos de referência
```js
let letters = {
  "A": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/A.png",
  "B": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/B.png",
  "C": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/C.png",
  "D": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/D.png",
  "E": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/E.png",
  "F": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/F.png",
  "G": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/G.png",
  "H": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/H.png",
  "I": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/I.png",
  "J": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/J.png",
  "K": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/K.png",
  "L": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/L.png",
  "M": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/M.png",
  "N": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/N.png",
  "O": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/O.png",
  "P": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/P.png",
  "Q": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Q.png",
  "R": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/R.png",
  "S": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/S.png",
  "T": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/T.png",
  "U": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/U.png",
  "V": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/V.png",
  "W": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/W.png",
  "X": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/X.png",
  "Y": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Y.png",
  "Z": "https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Z.png",
}

let codeToEnchantCaracter = {
  11: "A",
  12: "B",
  13: "C",
  14: "D",
  15: "E",
  16: "F",
  17: "G",
  18: "H",
  19: "I",
  20: "J",
  21: "K",
  22: "L",
  23: "M",
  24: "N",
  25: "O",
  26: "P",
  27: "Q",
  28: "R",
  29: "S",
  30: "T",
  31: "U",
  32: "V",
  33: "W",
  34: "X",
  35: "Y",
  36: "Z",
  37: " ",
}
```

### Rota para traduzir os Caractéres do Minecraft para Letras

#### Como funciona?
Eu atribui um código de 2 digitos para cada caractere, logo é necessario basicamente passar uma sequência de códigos respectivos para cada caractere, retribuindo a tradução, segue um exemplo e a função.

#### Exemplo
Nesse caso irei passar o seguinte código: 1924161924193035, respectivo ao encantamento "infinity" ou em português "infinidade".
```js
let data = await fetch(`http://localhost:4000/code-to-caracter?codes=1924161924193035`)
  .then(res => res.json())
      
if(data.data.length){
  console.log(data.data) // INFINITY
}
```

```js

app.use('/code-to-caracter', (req, res) => {
let { codes } = req.query
if (!!codes && codes.length > 0 && codes.length % 2 == 0) {
    
  let traduction = "";
  let lastCode;
  for(let i = 0; i < codes.length; i++){

    if(i % 2 == 0){

      lastCode = codes[i];

    }else{

      lastCode+=codes[i];

    }

    if(lastCode.length == 2){

      traduction += codeToEnchantCaracter[lastCode];
      lastCode = '';

    }

    }
    res.send(JSON.stringify({data: traduction}))
  }else{
    res.sendStatus(502)
  }
});

```

#### Significado de cada código

<div align="center">
   <div>
     <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/A.png">
     <p>11</p>
   </div>
   <div>
     <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/B.png">
     <p>12</p>
   </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/C.png">
   <p>13</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/D.png">
   <p>14</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/E.png">
   <p>15</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/F.png">
   <p>16</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/G.png">
   <p>17</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/H.png">
   <p>18</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/I.png">
   <p>19</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/J.png">
   <p>20</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/K.png">
   <p>21</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/L.png">
   <p>22</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/M.png">
   <p>23</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/N.png">
   <p>24</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/O.png">
   <p>25</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/P.png">
   <p>26</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Q.png">
   <p>27</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/R.png">
   <p>28</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/S.png">
   <p>29</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/T.png">
   <p>30</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/U.png">
   <p>31</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/V.png">
   <p>32</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/W.png">
   <p>33</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/X.png">
   <p>34</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Y.png">
   <p>35</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Z.png">
   <p>36</p>
  </div>
  <div>
   <img src="https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Space.png">
   <p>37</p>
  </div>
</div>

### Rota para traduzir Letras para os Caractéres do Minecraft

#### Como funciona?
Simples, eu atribui as Letras como keys de um objeto e o respectivo caractere na frente, segue um exemplo e a função.

#### Exemplo
Nesse caso irei escrever "infinity" o mesmo encantamento de cima.

```js
async function letterToEnchant() {
    let data = await fetch(`http://localhost:4000/letter-to-enchantment?text=INFINITY`)
        .then(res => res.json())
        .catch(e => console.log(e))

    console.log(data) // O resultado será o link das respectivas imagens dos caractéres
}
```

```js
app.use('/letter-to-enchantment', (req, res) => {
  let { text } = req.query
  if (!!text && text.length > 0) {
    let newText = []
    for (let i = 0; i < text.length; i++) {

      if(text[i] != " " && text[i] != "-" && text[i] != "_"){
        newText.push(`https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/${text[i].toUpperCase()}.png`)
      }else{
        newText.push(`https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/Space.png`)
      }

    }
    res.send(newText)
  }else{
    res.sendStatus(502)
  }
});
```
