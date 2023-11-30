const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');

const cors = require('cors');
app.use(cors());

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

app.use('/letter-to-enchantment', (req, res) => {
  let { text } = req.query
  if (!!text && text.length > 0) {
    let newText = []
    for (let i = 0; i < text.length; i++) {

      newText.push(`https://raw.githubusercontent.com/Victor-Lis/Minecraft-Enchantments/main/src/images/${text[i].toUpperCase()}.png`)

    }
    res.send(newText)
  }else{
    res.sendStatus(500)
  }
});

app.use('/all', (req, res) => {

  res.send(letters)

})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(
    port === 4000
      ? `Server is running on http://localhost:${port}`
      : `Server is running on ${port}`
  );
});
