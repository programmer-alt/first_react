import React, { useRef, useState, MutableRefObject, useLayoutEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NoteTs: React.FC = (): JSX.Element => {
  interface Note {
    title: string,
    isComplete: boolean,
    id: string
  }
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleAddNote = () => {
    if(inputValue.trim() !== '') {
      const newNote : Note = {
        title: inputValue,
        isComplete: false,
        id: uuidv4 ()
      }
      setNotes([...notes, newNote]);
      setInputValue('');
      inputRef.current?.focus()
    }
  }
  const onDelete = (id: string) {
    const filteredNotes = notes.filter((note) => note.id !== id)
    setNotes(filteredNotes)
  }


return (
  <div>
  <input type="text"
  value={inputValue} 
  autoFocus
  ref={inputRef}
  placeholder='новая заметка'
  onChange={handleInputValue} />
  <button onClick={handleAddNote}>Ввод</button>
  <ul>
    {notes.map((note)=> <li key={note.id}>{note.title}
    <button onClick={()=> onDelete}>Удалить</button>
    </li> )
    }
   
  </ul>
  </div>
)
}