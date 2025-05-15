// app/mi-cuenta/index.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../context/authContext';

export default function MiCuenta() {
  const opciones = [
    { id:1,label: 'Mi Perfil', icon: 'person', route: '/tabs/mi-cuenta/perfil' },
    { id:2,label: 'Mis Trámites', icon: 'document-text', route: '/tabs/mi-cuenta/tramites' },
    { id:3,label: 'Registrar Captura', icon: 'camera', route:'/tabs/mi-cuenta/registrar' },
  ];
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text>Debes iniciar sesión para gestionar tus trámites</Text>
        <TouchableOpacity onPress={() => router.push('/auth/login')}>
          <Text style={{ color: 'blue' }}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

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
    <TouchableOpacity onPress={logout}>
        <Text style={{ color: 'red' }}>Cerrar sesión</Text>
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