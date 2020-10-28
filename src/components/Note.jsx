import React from "react";

function Note(props) {
  function deleteNote() {
    props.updateNotes((prevVal) =>
      prevVal.filter((note, index) => props.idx !== index)
    );
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
        <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Note;
