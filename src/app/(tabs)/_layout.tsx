import "@/styles/global.css";
import { Tabs } from "expo-router";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: "#6552FE",
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "#121212",
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,    
          height: 60,       
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Calculadora flex",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <FontAwesome name="calculator" size={22} color={color} />
              );
            } else {
              return (
                <FontAwesome name="calculator" size={22} color={color} />
              );
            }
          },
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Despesas",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <MaterialIcons name="attach-money" size={25} color={color} />
              );
            } else {
              return (
                <MaterialIcons name="attach-money" size={25} color={color} />
              );
            }
          },
        }}
      />
    </Tabs>
  );
}
