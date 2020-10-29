import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, updateNote] = useState({ title: "", content: "" });
  const { title, content } = newNote;
  const [isExpanded, setExpansion] = useState(false);

  function detectInputChange(event) {
    const { name, value } = event.target;
    updateNote((prevVal) => ({
      ...prevVal,
      [name]: value
    }));
  }

  function addNewNote(event) {
    event.preventDefault();
    if (title.length && content.length) {
      props.updateNotes((prevVal) => [
        ...prevVal,
        { title: title, content: content }
      ]);
    }
    updateNote({ title: "", content: "" });
    setExpansion(false);
  }

  function expandContentArea() {
    setExpansion(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onFocus={expandContentArea}
          onChange={detectInputChange}
          placeholder="Title"
          value={title}
        />
        {isExpanded && (
          <textarea
            name="content"
            onChange={detectInputChange}
            placeholder="Take a note..."
            value={content}
            rows="3"
          />
        )}
        <Zoom in={isExpanded}>
          <Fab onClick={addNewNote} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
