const express = require('express');
const routes = require ('./routes')

require ('./database');

const app = express();
const port = 3030

app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log(`Server rodando em: http://localhost:${port}`)
})

