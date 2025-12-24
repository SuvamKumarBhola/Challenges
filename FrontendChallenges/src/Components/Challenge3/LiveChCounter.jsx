import React, { useEffect, useState } from 'react'

function LiveChCounter() {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("Neutral")

    const MAX_LIMIT = 150;
    const WARNING_THRESHOLD = 100;
    const charCount = text.length;

    const handleChanges = (e) => {
        const newText = e.target.value;
        if (newText.length <= MAX_LIMIT) {
            setText(newText);
        }
    };

    useEffect(() => {
        document.title = `Count: ${charCount}/${MAX_LIMIT}`

        if (charCount >= MAX_LIMIT) {
            console.log("Limit Reached");
            setStatus("Limit Reached");
        }else if(charCount> WARNING_THRESHOLD){
            setStatus("Warning");
        }else{
            setStatus("Safe");
        }

        return ()=>{
            document.title = "React App"
        }
    },[charCount])

    return (
        <div>
            <h2>Live Character Counter</h2>

            <textarea
                value={text}
                onChange={handleChanges}
                rows="5"
                placeholder='Type Here'
            />
            <div>
                <span>{charCount}/{MAX_LIMIT}</span>
                <span>{status}</span>
            </div>
        </div>
    )
}

export default LiveChCounter