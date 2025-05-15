import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Comercio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MaterialCommunityIcons name="storefront-outline" size={80} color="#2e7d32" />
      <Text style={styles.title}>Comercio y Trazabilidad</Text>
      <Text style={styles.description}>
        Accedé a la información relacionada con tu comercio, habilitaciones y trazabilidad de productos.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Habilitación Comercial</Text>
        <Text style={styles.cardText}>Estado: Aprobado</Text>
        <Text style={styles.cardText}>Fecha: 01/04/2025</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Última Inspección</Text>
        <Text style={styles.cardText}>Resultado: Aprobada</Text>
        <Text style={styles.cardText}>Fecha: 15/03/2025</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Trazabilidad de Productos</Text>
        <Text style={styles.cardText}>Última actualización: 12/05/2025</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f8f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
});
