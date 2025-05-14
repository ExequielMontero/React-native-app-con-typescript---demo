import { View, Text, StyleSheet } from 'react-native';

export default function Registrar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Captura</Text>
      <Text>Formulario de captura...</Text>
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

