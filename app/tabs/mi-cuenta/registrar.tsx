import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

export default function RegistrarCaptura() {
  const [especie, setEspecie] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fecha, setFecha] = useState('');
  const [lugar, setLugar] = useState('');
  const [ambiente, setAmbiente] = useState('');

  const handleRegistrar = () => {
    if (!especie || !cantidad || !fecha || !lugar || !ambiente) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    // Aquí podrías enviar los datos a una API o almacenarlos
    Alert.alert('Registro exitoso', 'La captura ha sido registrada correctamente');

    // Reset formulario
    setEspecie('');
    setCantidad('');
    setFecha('');
    setLugar('');
    setAmbiente('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Captura</Text>

      <Text style={styles.label}>Especie</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Carpincho"
        value={especie}
        onChangeText={setEspecie}
      />

      <Text style={styles.label}>Cantidad</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 2"
        value={cantidad}
        onChangeText={setCantidad}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Fecha de captura</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 2025-05-15"
        value={fecha}
        onChangeText={setFecha}
      />

      <Text style={styles.label}>Lugar</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Laguna El Cese"
        value={lugar}
        onChangeText={setLugar}
      />

      <Text style={styles.label}>Tipo de ambiente</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Monte, río, pastizal"
        value={ambiente}
        onChangeText={setAmbiente}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegistrar}>
        <Text style={styles.buttonText}>Registrar Captura</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1976d2',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 12,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#1976d2',
    padding: 12,
    borderRadius: 6,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

