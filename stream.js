const {createReadStream} = require('fs');

const stream = createReadStream('./content/resultt.txt')

stream.on('data', (result)=>{
    console.log(result)
})