"use client";

import { useEffect, useState } from "react";

type Note = {
  id: number;
  content: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const addNote = async () => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newNote }),
    });
    const addedNote = await res.json();
    setNotes((prev) => [...prev, addedNote]);
    setNewNote("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a note"
          className="flex-1 border border-gray-300 rounded px-2 py-1"
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        {notes.map((note) => (
          <li key={note.id} className="text-gray-800">
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}