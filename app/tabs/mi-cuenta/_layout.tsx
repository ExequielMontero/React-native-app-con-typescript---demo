// app/mi-cuenta/_layout.tsx
import { Stack } from 'expo-router';

export default function MiCuentaLayout() {
  return (
    <Stack  screenOptions={{
        headerShown: false,   // ← oculta la barra superior
      }}>
      <Stack.Screen
        name="index"
        options={{ title: 'Mi Cuenta' }}
      />
      <Stack.Screen
        name="perfil"
        options={{ title: 'Mi Perfil' }}
      />
      <Stack.Screen
        name="tramites"
        options={{ title: 'Mis Trámites' }}
      />
      <Stack.Screen
        name="registrar"
        options={{ title: 'Registrar Captura' }}
      />
      <Stack.Screen
        name="soporte"
        options={{ title: 'Soporte y Contacto' }}
      />
    </Stack>
  );
}
