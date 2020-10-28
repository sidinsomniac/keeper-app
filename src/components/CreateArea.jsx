import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, updateNote] = useState({ title: "", content: "" });
  let { title, content } = newNote;

  function detectInputChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    updateNote((prevVal) => ({
      ...prevVal,
      [inputName]: inputValue
    }));
  }

  function addNewNote(event) {
    event.preventDefault();
    props.updateNotes((prevVal) => [
      ...prevVal,
      { title: title, content: content }
    ]);
    updateNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={detectInputChange}
          placeholder="Title"
          value={title}
        />
        <textarea
          name="content"
          onChange={detectInputChange}
          placeholder="Take a note..."
          value={content}
          rows="3"
        />
        <button onClick={addNewNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
