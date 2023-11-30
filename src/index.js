const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');

const cors = require('cors');
app.use(cors());

let letters = {

}

app.use('/letter-to-enchantment', (req, res) => {
  res.sendStatus(200)
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(
    port === 4000
      ? `Server is running on http://localhost:${port}`
      : `Server is running on ${port}`
  );
});
