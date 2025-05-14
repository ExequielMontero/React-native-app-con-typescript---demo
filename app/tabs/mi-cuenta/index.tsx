// app/mi-cuenta/index.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function MiCuenta() {
  const router = useRouter();

  const opciones = [
    { id:1,label: 'Mi Perfil', icon: 'person', route: './mi-cuenta/perfil' },
    { id:2,label: 'Mis Trámites', icon: 'document-text', route: './mi-cuenta/perfil' },
    { id:3,label: 'Registrar Captura', icon: 'camera', route: './mi-cuenta/perfil' },
    { id:4,label: 'Soporte y Contacto', icon: 'help-circle', route: './mi-cuenta/perfil' },
  ];

  return (
    <View style={styles.container}>
      {opciones.map((opt) => (
        <TouchableOpacity
          key={opt.id}
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => router.push(opt.route)}
        >
          <Ionicons name={opt.icon as any} size={28} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>{opt.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16, 
    backgroundColor: '#f5f5f5',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1976d2',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 12,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
