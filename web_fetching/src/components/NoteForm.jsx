import React, {useState} from "react";

export default function NoteForm({addNote, handleLogout}){
    const [newNote, setNewNote] = useState('');

    const handleChange=(event)=>{
        setNewNote(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDeafult();
        const noteObject={
            contect:newNote,
            important:Math.random()>0.5
          }
          addNote(noteObject);
          setNewNote('');
    }

    return(
        <div>
            <h1>Create a nre note</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Write your note content'
                    type="text" 
                    value={newNote}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
            <button onClick={handleLogout}>
                Cerra Sesión
            </button>
        </div>
    )
}