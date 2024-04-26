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

 

    const addNote = () => {
        let notesObj = [];
        let addNoteInput = document.getElementById('addNote');
        let notesString = localStorage.getItem('notes');

        if (notesString !== null) {
            notesObj = JSON.parse(notesString);
        }

        let now = new Date();
        let dateTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;

        let tempObj = { text: addNoteInput.value, time: dateTime };
        notesObj.push(tempObj);
        localStorage.setItem('notes', JSON.stringify(notesObj));

        addNoteInput.value = '';
        displayNotes();
    };

   

    return (
        <div className="container mx-auto my-3">
            <div className="max-w-lg mx-auto bg-gray-900 text-white p-4 mb-6 rounded-lg">
                <h5 className="text-xl font-semibold mb-2">Write a note</h5>
                <div className="form-group">
                    <textarea className="form-input w-full bg-gray-800 text-white border-none rounded-lg py-2 px-4" id="addNote" aria-label="With textarea"></textarea>
                </div>
                <br />
                <button onClick={addNote} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Add</button>
            </div>

            <hr className="border-t border-gray-700 my-6" />

            <div id="noMatches" className="flex flex-wrap -mx-4 container-fluid"></div>

            <div id="notes" className="flex flex-wrap -mx-4 container-fluid">
                {notes.length === 0 ? (
                    <h3 style={{ textAlign: 'center', color: 'grey' }}>Nothing to display</h3>
                ) : (
                    notes.map((note, index) => (
                        <div key={index} className="card mx-4 my-2 bg-dark text-white thatsMyNote" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h6>{note.time}</h6>
                                <p className="card-text">{note.text}</p>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NoteApp;
