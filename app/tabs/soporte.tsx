import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Soporte() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:soporte@miapp.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+5491123456789');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="help-circle-outline" size={80} color="#1976d2" />
      <Text style={styles.title}>Soporte y Contacto</Text>
      <Text style={styles.text}>
        Si tenés algún problema o consulta, comunicate con nuestro equipo de soporte.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
        <Ionicons name="mail-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>soporte@miapp.com</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePhonePress}>
        <Ionicons name="call-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>+54 9 11 2345 6789</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976d2',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
