import AddButton from '@/components/add-button';
import AddNote from '@/components/add-note';
import NotesView from '@/components/notes-view';
import PageHeader from '@/components/page-header';
import { globalNotes, Note } from '@/hooks/user-date';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { v4 as uuidv4 } from "uuid";


export default function HomeScreen() {

  const notesArray = Object.values(globalNotes);
  const [notes, setNotes] = useState<Note[]>([]);

  function addNote(title: string) {
    const newNote: Note = { id: uuidv4(), title, content: "" };

    // update global dictionary
    globalNotes[newNote.id] = newNote;

    // update local state
    setNotes((prev) => [...prev, newNote]);
  }

  return (
    <View style={styles.bodyContainer}>
      <PageHeader />
      <AddNote onAddNote={addNote} />
      <NotesView notes={notes} />   {/* ✅ render from state */}
      <AddButton />
    </View>
    
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#36393e"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
