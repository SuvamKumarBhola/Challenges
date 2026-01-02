const utils = require('./utils.js')

const command = process.argv[2];
const title = process.argv[3]
const body = process.argv[4];

if(command === 'add'){
    if(!title || !body){
        console.log("usage: node notes.js add \"Title\" \"Body\"");
    }else{
        utils.addNote(title, body)
    }
}else if(command === 'remove'){
    if(!title){
        console.log("usage: node notes.js remove \"Title\"");
    }else{
        utils.removeNotes(title)
    }
}else if(command === 'list'){
    utils.listNotes()
}else{
    console.log("Unknown command");
}