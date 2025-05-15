import React,  { ReactNode } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';

export const Card = ({ children }: { children: ReactNode }) => {
  return <View style={styles.card}>{children}</View>;
};

export const Badge = ({ children }: { children: string }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const noticias = [
  {
    id: '1',
    categoria: 'Caza y Pesca',
    titulo: 'Grandes capturas en el Paraná',
    resumen: 'Pescadores reportan dorados de más de 10kg este fin de semana.',
    fecha: '13/05/2025',
  },
  {
    id: '2',
    categoria: 'Normativas',
    titulo: 'Nuevas reglas para la caza menor',
    resumen: 'La provincia anunció cambios en los permisos de caza de liebre.',
    fecha: '10/05/2025',
  },
  {
    id: '3',
    categoria: 'Seguridad y Salud Pública',
    titulo: 'Recomendaciones ante el aumento de garrapatas',
    resumen: 'Salud pública advierte sobre casos de fiebre maculosa.',
    fecha: '09/05/2025',
  },
  {
    id: '4',
    categoria: 'Fauna Peligrosa',
    titulo: 'Avistamiento de yacarés en zonas de pesca',
    resumen: 'Se registraron 3 encuentros en cercanías de Santa Elena.',
    fecha: '08/05/2025',
  },
];

const NoticiasScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Banner Temporada Habilitada */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>🎉 ¡Comenzó la temporada habilitada de caza y pesca! 🎣🦌</Text>
      </View>

      {/* Noticias */}
      {noticias.map((noticia) => (
        <Card key={noticia.id}>
          <View style={styles.cardHeader}>
            <Badge>{noticia.categoria}</Badge>
            <Text style={styles.fecha}>{noticia.fecha}</Text>
          </View>
          <Text style={styles.titulo}>{noticia.titulo}</Text>
          <Text style={styles.resumen}>{noticia.resumen}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  banner: {
    backgroundColor: '#dcfce7',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderColor: '#22c55e',
    borderWidth: 1,
  },
  bannerText: {
    color: '#166534',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  fecha: {
    fontSize: 12,
    color: '#6b7280',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#111827',
  },
  resumen: {
    fontSize: 14,
    color: '#374151',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 12,
  },
    badge: {
      backgroundColor: '#e0f2fe',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 12,
    },
    text: {
      fontSize: 12,
      color: '#0369a1',
      fontWeight: '600',
    },
});

export default NoticiasScreen;
