const { app } = require('./src/app')
const { NODE_SERVER } = require('./src/config/serve.js')

app.listen(NODE_SERVER, console.log('8000 run serve'))
