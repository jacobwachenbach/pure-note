import { useMenu } from '@/hooks/MenuContext';
import { globalNotes, Note } from '@/hooks/user-date';
import { Button } from '@react-navigation/elements';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { v4 as uuidv4 } from "uuid";


type AddNoteProps = {
  onAddNote: (title: string) => void;
};

export default function AddNote({ onAddNote }: AddNoteProps) {

    const { menu, setMenu } = useMenu();
    const [ input, setInput ] = useState("");


    const addNote = (name: string) => {
      if (name == "") {
        name = "Blank Note"
      }
      const newNote: Note = { id: uuidv4(), title: name, content: ""};

      globalNotes[newNote.id] = newNote;
      console.log("Note added:", globalNotes);
    }


  return (
    <View style={[styles.bodyContainer, menu ? {display: 'flex'} : {display: 'none'}]}>
        <View style={styles.menuView}>
            <Text style={styles.addMenuText}>Add Note</Text>
            <TextInput 
            placeholder='Note Title.' 
            style={styles.noteInput}
            onChangeText={setInput}
            selectionColor="None" 
            value={input} />

            <View style={styles.buttonContainer}>
                <Button style={styles.saveButton} onPressIn={() => {setMenu(false)}}>Cancel</Button>
                <Button onPress={() => { onAddNote(input); setInput(""); }}>
                  Create
                </Button>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  bodyContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 10, // 👈 ensures it stacks above other content
},
  menuView: {
    width: "60%",
    height: "35%",
    backgroundColor: '#2c2c2cff',
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    padding: 10,
    borderRadius: 12,

  },
  addMenuText: {
    color: "white",
    fontSize: 24,
  },
  noteInput: {
    width: "80%",
    height: "24%",
    borderWidth: 1,
    borderRadius: 12,
    color: "#5865F2",
    backgroundColor: "#282b30",
    padding: 10,
    
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",

  },
  saveButton: {
    backgroundColor: "#424549",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#646b75ff",
    marginLeft: 8,
    marginRight: 8,

  }
});
