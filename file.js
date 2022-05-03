const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFileProm = util.promisify(readFile)
// const writeFileProm = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        await writeFile('./content/resultt.txt', `Result: ${first}`);
        console.log(first)
    } catch (error) {
        console.log(error);
    }
}

start()


// OG WRAPPER
// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path, 'utf8', (err,data)=>{
//             if (err){
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt').then(result => console.log(result)).catch(err => console.log(err))



