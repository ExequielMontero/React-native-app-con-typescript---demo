import { View, Text, StyleSheet } from 'react-native';

export default function Tramites() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Trámites</Text>
      <Text>Lista de trámites...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
