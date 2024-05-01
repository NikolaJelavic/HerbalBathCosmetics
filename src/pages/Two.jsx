import { useState, useEffect } from 'react';

const NoteApp = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        displayNotes();
    }, []);

    const displayNotes = () => {
        let notesObj = [];
        let notesString = localStorage.getItem('notes');

        if (notesString !== null) {
            notesObj = JSON.parse(notesString);
        }

        setNotes(notesObj);
    };

    const deleteNote = (index) => {
        let notesObj = [...notes];
        notesObj.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        displayNotes();
    };

    const editNote = (index) => {
        let notesObj = [...notes];
        let newNoteText = prompt('Edit your note:', notesObj[index].text);
        if (newNoteText !== null) {
            notesObj[index].text = newNoteText;
            localStorage.setItem('notes', JSON.stringify(notesObj));
            displayNotes();
        }
    };

    const changeColor = (index, color) => {
        let notesObj = [...notes];
        notesObj[index].color = color;
        localStorage.setItem('notes', JSON.stringify(notesObj));
        displayNotes();
    };

    const addNote = () => {
        let notesObj = [];
        let addNoteInput = document.getElementById('addNote');
        let tagsInput = document.getElementById('tagsInput');
        let notesString = localStorage.getItem('notes');

        if (notesString !== null) {
            notesObj = JSON.parse(notesString);
        }

        let now = new Date();
        let dateTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;

        let tempObj = { text: addNoteInput.value, time: dateTime, tags: tagsInput.value.split(',').map(tag => tag.trim()) };
        notesObj.unshift(tempObj); 
        localStorage.setItem('notes', JSON.stringify(notesObj));

        addNoteInput.value = '';
        tagsInput.value = '';
        displayNotes();
    };

    return (
        <div className="container mx-auto my-3">
            <div className="max-w-lg mx-auto bg-gray-900 text-white p-4 mb-6 rounded-lg">
                <h5 className="text-xl font-semibold mb-2">Write a note</h5>
                <div className="form-group">
                    <textarea className="form-input w-full bg-gray-800 text-white border-none rounded-lg py-2 px-4" id="addNote" aria-label="With textarea"></textarea>
                </div>
                <div className="form-group">
                    <input type="text" className="form-input w-full bg-gray-800 text-white border-none rounded-lg py-2 px-4" id="tagsInput" placeholder="Add tags/categories (comma separated)" />
                </div>
                <br />
                <button onClick={addNote} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Add</button>
            </div>

            <hr className="border-t border-gray-700 my-6" />

            <div id="notes" className="flex flex-wrap justify-around container-fluid">
                {notes.length === 0 ? (
                    <h3 style={{ textAlign: 'center', color: 'grey' }}>Nothing to display</h3>
                ) : (
                    notes.map((note, index) => (
                        <div key={index} className="card mx-4 my-2" style={{ width: '18rem', backgroundColor: note.color || 'white', position: 'relative' }}>
                            <div className="card-body">
                                <h6>{note.time}</h6>
                                <p className="card-text">{note.text}</p>
                                <div className="absolute top-0 right-0 mt-2 mr-2">
                                    <input type="color" value={note.color || '#ffffff'} onChange={(e) => changeColor(index, e.target.value)} />
                                </div>
                                <div className="tags-container">
                                    {note.tags && note.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button onClick={() => editNote(index)} className="btn btn-primary">Edit</button>
                                    <button onClick={() => deleteNote(index)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NoteApp;
