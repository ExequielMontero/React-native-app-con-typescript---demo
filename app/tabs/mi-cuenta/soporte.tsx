import { View, Text, StyleSheet } from 'react-native';

export default function Soporte() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soporte y Contacto</Text>
      <Text>Información de contacto...</Text>
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
