const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, '', 'newname.txt'),'utf8');
        //same for write and append
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

/* fs.readFile(path.join(__dirname, '', 'lorem.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
 */
fileOps();

/* 
fs.writeFile(path.join(__dirname, '', 'newname.txt'), 'Hello there', (err) => {
    if (err) throw err;
    console.log('Write Operation completed');


    fs.appendFile(path.join(__dirname, '', 'newname.txt'), ' \n\nTesting file', (err) => {
        if (err) throw err;
        console.log('append completed');

        fs.appendFile(path.join(__dirname, '', 'newname.txt'), path.join(__dirname, '', 'newreply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename completed');
        })
    })

})
 */



/* process.on('uncaughtException', err=>{
    console.error('There was an uncaught error')
    process.exit(1)
}) */

