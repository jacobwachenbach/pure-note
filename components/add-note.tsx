import { useMenu } from '@/hooks/MenuCOntext';
import { Button } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function AddNote() {

    const { menu, setMenu } = useMenu();


  return (
    <View style={[styles.bodyContainer, menu ? {display: 'flex'} : {display: 'none'}]}>
        <View style={styles.menuView}>
            <Text style={styles.addMenuText}>Add Note</Text>
            <TextInput 
            placeholder='Note Title.' 
            style={styles.noteInput}
            selectionColor="None" />

            <View style={styles.buttonContainer}>
                <Button style={styles.saveButton} onPressIn={() => {setMenu(false)}}>Cancel</Button>
                <Button style={styles.saveButton}>Create</Button>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  bodyContainer: {
    flex: 3,
    width: "100%",
    height: "100%",
    backgroundColor: 'None',
    justifyContent: "center",
    alignItems: "center",
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
