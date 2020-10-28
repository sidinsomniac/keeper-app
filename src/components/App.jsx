import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);
  return (
    <div>
      <Header />
      <CreateArea updateNotes={updateNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          idx={index}
          title={note.title}
          content={note.content}
          updateNotes={updateNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
