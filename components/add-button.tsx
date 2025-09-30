import { useMenu } from '@/hooks/MenuContext';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AddButton() {

  const { menu, setMenu } = useMenu();



  const handleAdd = () => {
    // TODO: wire this up to your add action / navigation
    console.log('Add tapped');
  };

  return (
    <View style={styles.bodyContainer}>
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={handleAdd}
        accessibilityRole="button"
        accessibilityLabel="Add"
      >
        <Text style={styles.fabPlus} onPress={() => setMenu(true)}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#36393e',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#5865F2', // pick any brand color you like
    alignItems: 'center',
    justifyContent: 'center',

    // Android shadow
    elevation: 6,

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  fabPlus: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
    fontWeight: '700',
    marginTop: -2, // tiny nudge to optically center the plus
  },
});
