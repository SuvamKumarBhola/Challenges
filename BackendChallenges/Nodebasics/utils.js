const { log } = require('console');
const fs = require('fs')
const path = require('path');
const { title } = require('process');

const dataPath = path.join(__dirname, 'notes.json')

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync(dataPath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
};

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes, null, 2);
    fs.writeFileSync(dataPath, dataJSON)
};

const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title)

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log("Notes Added");
    }else{
        console.log("Note title taken");
    }
}


const removeNotes = (title)=>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=> note.title !== title)

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log("Note removed");
    }else{
        console.log("No note found");
    }
}


const listNotes = ()=>{
    const notes = loadNotes();
    console.log("your Notes");

    if(notes.length === 0){
        console.log('NO NOTES FOUND');
    }
    notes.forEach((note) => {
        console.log(`   -${note.title}`)
    });
    
}
 
module.exports ={
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes
};