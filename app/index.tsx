import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { Colors } from "../constants/Colors";

export default function Index() {
  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      // In a real app, you would check authentication state here
      // For now, redirect to login
      router.replace("/(auth)/login");
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
      }}
    >
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}
