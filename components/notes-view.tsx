import { Note } from "@/hooks/user-date";
import React, { useState } from "react";
import {
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import NoteItem from "./note-item";

type NotesViewProps = {
  notes: Note[];
};

export default function NotesView({ notes }: NotesViewProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [containerHeight, setContainerHeight] = useState(1);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setScrollPosition(yOffset);
  };

  return (
    <View
      style={styles.bodyContainer}
      onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollBody}
        showsVerticalScrollIndicator={false} // hide default
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(_, h) => setContentHeight(h)}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {notes.map((note) => (
          <NoteItem key={note.id} title={note.title} />
        ))}
      </ScrollView>

      {/* Custom Scroll Bar */}
      <View style={styles.scrollBarTrack}>
        <View
          style={[
            styles.scrollBarThumb,
            {
              height: (containerHeight / contentHeight) * containerHeight, // proportional size
              transform: [
                {
                  translateY:
                    (scrollPosition / contentHeight) * containerHeight,
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    width: "100%",
    flex: 4,
    justifyContent: "center",
    flexDirection: "row", // so scrollbar aligns beside scrollview
  },
  scrollBody: {
    alignItems: "center",
    padding: 10,
  },
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
    height: "80%",
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
  scrollBarTrack: {
    width: 6,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 3,
    marginLeft: 2,
    alignSelf: "stretch", // make it full height
  },
  scrollBarThumb: {
    width: 6,
    backgroundColor: "#5865F2",
    borderRadius: 3,
  },
});
