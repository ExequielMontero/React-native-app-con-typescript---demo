// app/tabs/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

export default function TabsLayout() {

  return (
 
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1976d2', // Color del header
        },
        headerTintColor: '#fff', // Color del texto y los íconos del header
        tabBarActiveTintColor: '#1976d2', // Color del icono activo en el tab
        tabBarInactiveTintColor: '#777', // Color del icono inactivo
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="noticias"
        options={{
          title: 'Noticias',
          tabBarIcon: ({ color, size }) => <Ionicons name="newspaper" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="soporte"
        options={{
          title: 'Soporte y Contacto',
          tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="comercio"
        options={{
          title: 'Control y Fiscalización',
          tabBarIcon: ({ color, size }) => <Ionicons name="briefcase" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mi-cuenta"
        options={{
          title: 'Mi Cuenta',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
