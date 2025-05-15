import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // si usás expo-router
import { useAuth } from '../../context/authContext';

const LoginScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();
  
  const handleLogin = async () => {
    if (usuario === 'admin' && contrasena === '1234') {
      login();
      router.replace('/tabs/mi-cuenta');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <Text style={styles.label}>CUIL / CUIT (sin puntos ni guiones)</Text>    
      <TextInput
        placeholder="Usuario (CUIL / CUIT)"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#ccc"
        style={styles.input}
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />

      {error !== '' && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/auth/register')}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={styles.registerLink}>¿Olvidó su contraseña?</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1976d2',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 26,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#004ba0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: '#ffcccb',
    textAlign: 'center',
    marginBottom: 10,
  },
  registerLink: {
    color: '#fff',
    textAlign: 'center',
    
  },
  registerButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 6,
    padding: 12,
    backgroundColor: 'white',
  },
  registerButtonText: { color: '#333', textAlign: 'center', fontWeight: '600' },
  label: { fontSize: 13, color: '#fff', marginBottom: 4, marginTop: 12 },
});

