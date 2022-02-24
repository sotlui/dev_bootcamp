import { useEffect, useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Notification from './components/Notification';
import loginService from './services/Login';
//import { create as createNote, getAll as getAllNotes } from './services/notas/index';
import noteService from './services/Notes';

function App() {
  const [notes, setNotes]=useState([]);
  const [showAll, setShowAll]=useState(true);
  const [errorMessage, setErrorMessage]=useState(null);

  //const [loading, setLoading]=useState(false);
  //const [error, setError]=useState('');
  

  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [user,setUser]=useState({token:'123'});

  useEffect(() => {
    //setLoading(true);
    noteService.getAll().then(notes=>{
      setNotes(notes);
      //setLoading(false);
    })
    /*axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      const {data}=response;
      return data;
    });*/
  }, []);

  //Login
  useEffect(()=>{
    //Optenemos el local stores de login
    const logginUserJSON = window.localStorage.getItem('loggedNoteAppUser');
    if(logginUserJSON){
      const user=JSON.parse(logginUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  },[]);

  //const {token}=user;

  const handleLogout =()=>{
    setUser('');
    noteService.setToken('');
    window.localStorage.removeItem('loggedNoteAppUser');
  }

  const addNote = (noteObject)=>{
    noteService.create(noteObject)
      .then(newNote=>{
        setNotes(notes.concat(newNote))
      })
      .catch((error)=>{
      });
    }

  const handleLogin =async (event)=>{
    event.preventDefault();

    try {
      const user =await loginService.login({
        username,
        password
      })  
      //Guardar Token en local storage
      window.localStorage.setItem(
        'loggedNoteAppUser',JSON.stringify({token:'123'})
      );

      //Guardamos o pasamos el token
      noteService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (error) {
      setErrorMessage('Error credencial');
      //Mostrar el error por un tiempo minimo
      setTimeout(()=>{
        setErrorMessage(null);
      },5000)
    }
  }

  return (
    <div>
      <h1>Notes</h1>
      {/*loading ? "Cargando....":""*/}
      <Notification message={errorMessage}/>
      {/*user 
        ? renderCreateNote()
      : renderLoginForm()*/}
      <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({target})=>setUsername(target.value)}
          handlePasswordChange={({target})=>setPassword(target.value)}
          handleSubmit={handleLogin}
        />
        <NoteForm
          addNote={addNote}
          handleLogout={handleLogout}
        />
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          show{showAll ? ' important':' all'}
        </button>
      </div>
      <ol>
        {notes.map(note=>
            <Note key={note.id}{...note}/>
        )}
        {/*notesToShow.map((note,i)=>{
          <Note 
            key={i}
            note={note}
            toggleImportance={()=>toggleImportanceOf(note.id)}
            />
        })*/}
      </ol>
     
    </div>
  );
}

export default App;
