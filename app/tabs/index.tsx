import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/authContext';

export default function HomeScreen() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerSuperior}>
          {/* Campanita para notificaciones */}
          <View style={styles.notificationContainer}>
            <TouchableOpacity>
              <Ionicons name="notifications" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* Mostrar nombre o botón de login */}
          
            {isLoggedIn ? (
              <View style={{alignItems:"center"}}>
              <View style={styles.iconButton}>
                <Ionicons name="person-circle" size={40} color="white" />
                <Text style={styles.iconTextWhite}>Hola, Ariel Perez </Text>
              </View>
              </View>
            ) : (
              <View style={{alignItems:"center"}}>
              <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/auth/login')}>
                <Ionicons name="log-in-outline" size={40} color="white" />
                <Text style={styles.iconTextWhite}>Iniciar sesión</Text>
              </TouchableOpacity>
              </View>
            )}
        </View>

      {/* Iconos de categorías */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconCircle}>
            <Ionicons name="shield-checkmark-outline" size={30} color="black" />
          </View>
          <Text style={styles.iconText}>Cambios Normativos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconCircle}>
            <Ionicons name="bag-handle-outline" size={30} color="black" />
          </View>
          <Text style={styles.iconText}>Consejos de Seguridad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconCircle}>
            <Ionicons name="medkit-outline" size={30} color="black" />
          </View>
          <Text style={styles.iconText}>Salud Pública</Text>
        </TouchableOpacity>    
      </View>

      {/* Sección de noticias */}
      <View style={styles.newsSection}>
        <Text style={styles.newsTitle}>Últimas Noticias</Text>
        <View style={styles.newsItem}>
          <Text style={styles.newsText}>Nuevas regulaciones para la caza en el norte del país.</Text>
        </View>
        <View style={styles.newsItem}>
          <Text style={styles.newsText}>Pesca deportiva: nuevas restricciones en los lagos locales.</Text>
        </View>
        <View style={styles.newsItem}>
          <Text style={styles.newsText}>Leyes de conservación para la fauna silvestre en zonas rurales.</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  containerSuperior: {
    backgroundColor: '#1976d2',
  },
  notificationContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginHorizontal:20,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#1976d2',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  iconButton: {
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
  },
  iconText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  iconTextWhite: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 10,
  },
  newsSection: {
    marginTop: 30,
    backgroundColor: '#1976d2',
    paddingVertical: 20,
    paddingHorizontal: 20,
    minHeight: 350,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  newsItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  newsText: {
    fontSize: 14,
    color: 'gray',
  },
});
