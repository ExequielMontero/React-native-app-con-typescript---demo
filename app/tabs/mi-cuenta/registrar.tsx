import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";

export default function Registrar() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Captura</Text>
      <Text>Formulario de captura...</Text>
           <TouchableOpacity onPress={() => router.push('./index')}>
                <Text style={{ color: 'blue' }}>volver</Text>
              </TouchableOpacity>
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

