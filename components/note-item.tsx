import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type NoteItemProps = {
  title: string;
  onPress?: () => void; // optional press handler
};

export default function NoteItem({ title, onPress }: NoteItemProps) {
  return (
    <TouchableOpacity style={styles.noteItem} onPress={onPress}>
      <View style={styles.viewableNoteItem}>
        <Text style={styles.noteItemText}>{title}</Text>
        <Text style={styles.noteItemEnter}>{">"}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewableNoteItem: {
    height: 60,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "rgba(40, 43, 48, 0.8)",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  noteItem: {
    width: "90%",
    minHeight: 60,   // or just remove height entirely
    marginBottom: 10,
    },
  noteItemText: {
    fontSize: 24,
    color: "#5865F2",
  },
  noteItemEnter: {
    fontSize: 24,
    marginLeft: "auto",
    fontWeight: "bold",
    color: "#5865F2",
  },
});
