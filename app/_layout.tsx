import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../context/authContext';

export default function RootLayout() {
// { headerShown: false } oculta el header que dice (tabs)
  return (
    <AuthProvider>

      <Stack screenOptions={{ headerShown: false }} />  
    </AuthProvider>
  )}
