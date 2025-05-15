import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const tramites = [
  {
    titulo: 'Habilitación Comercial',
    estado: 'aprobado',
    fecha: '01/04/2025',
  },
  {
    titulo: 'Última Inspección',
    estado: 'rechazado',
    fecha: '15/03/2025',
  },
  {
    titulo: 'Trazabilidad de Productos',
    estado: 'pendiente',
    fecha: '12/05/2025',
  },
];

type Estado = 'aprobado' | 'pendiente' | 'rechazado';

const statusColors: Record<Estado, { backgroundColor: string }> = {
  aprobado: { backgroundColor: 'green' },
  pendiente: { backgroundColor: 'orange' },
  rechazado: { backgroundColor: 'red' },
};

export default function Comercio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botón para iniciar nuevo trámite */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Trámite</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mis trámites</Text>
      </View>

      {tramites.map((t, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.statusIndicator, statusColors[t.estado]]} />
            <Text style={styles.cardTitle}>{t.titulo}</Text>
          </View>
          <Text style={styles.cardText}>
            Estado: {t.estado.charAt(0).toUpperCase() + t.estado.slice(1)}
          </Text>
          <Text style={styles.cardText}>Fecha: {t.fecha}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

