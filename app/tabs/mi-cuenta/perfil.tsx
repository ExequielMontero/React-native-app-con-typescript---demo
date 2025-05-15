import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import QRCode from 'react-native-qrcode-svg';
import { useRouter } from "expo-router";
import { useAuth } from "../../../context/authContext";
const ProfileScreen = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const profileData = {
    name: "Ariel Perez",
    userType: "Cazador | Pescador",
    qrValue: "arielperez",
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={100} color="#333" />
      </View>
      {/* Datos */}
      <Text style={styles.name}>{profileData.name}</Text>
      <Text style={styles.userType}>{profileData.userType}</Text>
      {/* QR Code 
        <View style={styles.qrContainer}>
          <QRCode value={profileData.qrValue} size={150} />
        </View> */}
        <TouchableOpacity onPress={() => router.replace('./index')}>
          <Text style={{ color: 'blue' }}>volver</Text>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          logout();
          router.replace("./index"); // o donde querés mandar al usuario
        }}
      >
        <Text style={{ color: "red" }}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  userType: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  qrContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;

function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
