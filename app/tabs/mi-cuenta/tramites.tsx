import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";

const tramites = [
  { id: '1', nombre: 'Renovación de DNI', estado: 'En proceso', fecha: '12/05/2025' },
  { id: '2', nombre: 'Licencia de conducir', estado: 'Aprobado', fecha: '28/04/2025' },
  { id: '3', nombre: 'Partida de nacimiento', estado: 'Pendiente', fecha: '10/05/2025' },
];

export default function Tramites() {
   const router = useRouter();
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Mis Trámites</Text>
      <FlatList
        data={tramites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.tramiteNombre}>{item.nombre}</Text>
            <Text>Estado: {item.estado}</Text>
            <Text>Fecha: {item.fecha}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
       <TouchableOpacity onPress={() => router.push('index')}>
                <Text style={{ color: 'blue' }}>volver</Text>
              </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  tramiteNombre: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
});
