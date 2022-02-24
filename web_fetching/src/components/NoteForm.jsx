import React, {useRef, useState} from "react";
import Toggleable from "./Toggleable";

export default function NoteForm({addNote, handleLogout}){
    const [newNote, setNewNote] = useState('');
    const toggableRef = useRef();
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
          //Accedemos siempre con current
          toggableRef.current.toggleVisiblity();
    }

    return(
        <Toggleable buttonLabel='New Note' ref={toggableRef}>
            <h1>Create a new note</h1>
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
        </Toggleable>
    )
}