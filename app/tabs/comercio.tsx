import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ControlPanel() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/validar')}>
          <Ionicons name="checkmark-circle-outline" size={40} color="#1976d2" />
          <Text style={styles.cardText}>Validar Permisos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/denuncias')}>
          <Ionicons name="alert-circle-outline" size={40} color="#d32f2f" />
          <Text style={styles.cardText}>Denuncias Anónimas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/zonas')}>
          <Ionicons name="map-outline" size={40} color="#388e3c" />
          <Text style={styles.cardText}>Zonas Habilitadas</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  cardContainer: { flexDirection: 'column', gap: 20 },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: { fontSize: 16, fontWeight: '500', color: '#333' },
});
