'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

let folderName = "./txt-files/";

if (!fs.existsSync(folderName)){
    console.log("Path doesn't exist, creating folder...")
    fs.mkdirSync(folderName);
}

const filename = `arquivo.txt`;
const stream = fs.createWriteStream(folderName + filename);
stream.write("conteudo do arquivo");
stream.end();

console.log("arquivo criado");