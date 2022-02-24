const  Note = ({title, body})=>{
    return( 
    <li>
        <p>{title}</p>
        <small>{body}</small>
    </li>
    )
}

export default Note;

/*const Note=({note,toggleImportance})=>{
    const label = note.important
    ? 'make not important' : 'make important';

    return(
        <li className='note'>
            <div>
                {note.content}
            </div>
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}*/