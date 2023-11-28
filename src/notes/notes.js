// 1.нужно 2 хука для доступа к dom элементу чтоб перключать фокус в поле ввода и useState для хранения массива
//создание useRef константы где хук ueRef(null) 
// создание константы для хранения массива заметок и функции обновления заметок
// создание константы текущее значение поля ввода и функции обновления этого значение 
// создание handleInputChange для получения текущего значения поля ввода используя (event)объект события в аргументе
// создание handleAddNote , где проверяется условие если текущее значение trim() не равно пустой строке то вызывается setInputValue и в нее ложится массив 
//поставить фокус обратно в поле ввода
import React, { useRef, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
      inputRef.current.focus();
    }
  };

  return (
    <div className="main">
      <div className="container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
          placeholder="Новая заметка"
          ref={inputRef}
        />
        <button onClick={handleAddNote}>Ввод</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notes;
