import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
  Modal,
} from 'react-native';
import { useRouter } from 'expo-router';

// ...importaciones...

export default function RegistroScreen() {
  const [documento, setDocumento] = useState('');
  const [cuil, setCuil] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const [sexoModalVisible, setSexoModalVisible] = useState(false);

  const [errores, setErrores] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  const validarContrasena = (pwd: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[-_*/]).{8,}$/;
    return regex.test(pwd);
  };

  const handleRegister = () => {
    const nuevosErrores: { [key: string]: string } = {};

    if (!documento) nuevosErrores.documento = 'Este campo es obligatorio';
    if (!cuil) nuevosErrores.cuil = 'Este campo es obligatorio';
    if (!sexo) nuevosErrores.sexo = 'Debe seleccionar una opción';
    if (!email) nuevosErrores.email = 'Este campo es obligatorio';
    if (!contrasena) nuevosErrores.contrasena = 'Este campo es obligatorio';
    if (!repetirContrasena) nuevosErrores.repetirContrasena = 'Este campo es obligatorio';
    if (contrasena && repetirContrasena && contrasena !== repetirContrasena)
      nuevosErrores.repetirContrasena = 'Las contraseñas no coinciden';
    if (contrasena && !validarContrasena(contrasena))
      nuevosErrores.contrasena =
        'Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo (-_*/)';

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) return;

    Alert.alert('Registro exitoso');
    router.replace('/auth/login');
  };

  const opcionesSexo = ['Masculino', 'Femenino', 'Otro'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Registro de Usuario</Text>

        <Text style={styles.label}>Documento (sin puntos)</Text>
        <TextInput
          style={styles.input}
          value={documento}
          onChangeText={setDocumento}
          keyboardType="numeric"
          placeholder="Ingrese N° Documento"
          placeholderTextColor="#000"
        />
        {errores.documento && <Text style={styles.error}>{errores.documento}</Text>}

        <Text style={styles.label}>CUIL / CUIT (sin puntos ni guiones)</Text>
        <TextInput
          style={styles.input}
          value={cuil}
          onChangeText={setCuil}
          placeholder="Ingrese su CUIL/CUIT"
          placeholderTextColor="#000"
        />
        {errores.cuil && <Text style={styles.error}>{errores.cuil}</Text>}

        <Text style={styles.label}>Sexo</Text>
        <TouchableOpacity style={styles.input} onPress={() => setSexoModalVisible(true)}>
          <Text style={{ color: sexo ? '#000' : '#000', fontSize: 14, height: 42,  justifyContent: 'center', padding: 12}}>{sexo || 'Seleccione una opción'}</Text>
        </TouchableOpacity>
        {errores.sexo && <Text style={styles.error}>{errores.sexo}</Text>}

        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Ingrese correo electrónico"
          keyboardType="email-address"
          placeholderTextColor="#000"
        />
        {errores.email && <Text style={styles.error}>{errores.email}</Text>}

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
          placeholder="Ingrese contraseña"
          placeholderTextColor="#000"
        />
        {errores.contrasena && <Text style={styles.error}>{errores.contrasena}</Text>}

        <Text style={styles.label}>Repita la Contraseña</Text>
        <TextInput
          style={styles.input}
          value={repetirContrasena}
          onChangeText={setRepetirContrasena}
          secureTextEntry
          placeholder="Repita la contraseña"
          placeholderTextColor="#000"
        />
        {errores.repetirContrasena && (
          <Text style={styles.error}>{errores.repetirContrasena}</Text>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        {/* Modal sexo */}
        <Modal visible={sexoModalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {opcionesSexo.map((opcion) => (
                <TouchableOpacity
                  key={opcion}
                  style={styles.option}
                  onPress={() => {
                    setSexo(opcion.toLowerCase());
                    setSexoModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{opcion}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={() => setSexoModalVisible(false)}>
                <Text style={styles.cancelModalText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1976d2' },
  container: { padding: 20, paddingBottom: 40, backgroundColor: '#1976d2' },
  title: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 13, color: '#fff', marginBottom: 4, marginTop: 12 },
  input: {
    color: '#000',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#fff',
    height: 42,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
    marginBottom: -4,
  },
  buttonContainer: { width: '100%', marginTop: 30 },
  cancelButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 6,
    padding: 12,
    backgroundColor: 'white',
  },
  cancelButtonText: { color: '#333', textAlign: 'center', fontWeight: '600' },
  registerButton: { backgroundColor: '#0066cc', borderRadius: 6, padding: 12 },
  registerButtonText: { color: 'white', textAlign: 'center', fontWeight: '600' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', padding: 30 },
  modalContent: { backgroundColor: '#fff', borderRadius: 10, paddingVertical: 20, paddingHorizontal: 15 },
  option: { paddingVertical: 10 },
  optionText: { fontSize: 16, color: '#000' },
  cancelModalText: { marginTop: 10, textAlign: 'center', color: 'red' },
});

