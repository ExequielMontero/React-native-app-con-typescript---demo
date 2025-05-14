// app/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
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
        name="control"
        options={{
          title: 'Fiscalización',
          tabBarIcon: ({ color, size }) => <Ionicons name="shield-checkmark" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="comercio"
        options={{
          title: 'Comercio',
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
