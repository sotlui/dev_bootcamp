import { useState } from "react";

const Agenda = ()=>{
    const [persons, setPersons]=useState([
        {name:'Luis Soto',
        telefono:'0000000'}
    ]);

    const [newName, setNewName]=useState('');
    const [newTelefono, setNewTelefono]=useState('');

     

    const addPerson=(event)=>{
        event.preventDefault();
        const newObjet={
            name:newName,
            telefono:newTelefono
        }
        //console.log();
        if(persons.find(p=>p.name===newName)){
            alert('Ya existe');
        }else{
            setPersons(persons.concat(newObjet));
            setNewName('');
            setNewTelefono('')
        }
    }

    const handleNameChange=(e)=>{
        setNewName(e.target.value);
    }
    const handleMovilChange=(e)=>{
        setNewTelefono(e.target.value);
    }

    return(
        <div>
            <h2>PhoneBook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:<input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    movil:<input value={newTelefono} onChange={handleMovilChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
            {persons.map(p=>
                <ul key={p.name}>{`${p.name} - ${p.telefono}`}</ul>)}
            </div>
            
        </div>
    )
}

export default Agenda;