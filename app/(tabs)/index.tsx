import AddButton from '@/components/add-button';
import AddNote from '@/components/add-note';
import PageHeader from '@/components/page-header';
import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.bodyContainer}>
      <PageHeader>
      </PageHeader>
      <AddNote />
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
