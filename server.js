const express = require('express')
const PORT = 4000

const app = express()
app.listen(PORT, () => console.log('Server Listo en el puerto  ' + PORT))