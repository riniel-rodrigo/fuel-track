import { Stack } from "expo-router";
import { View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function layoutExpenses() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTintColor: "#FFF",
        contentStyle: {
          backgroundColor: "#070707",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="newExpense"
        options={{
          title: "Adicionar despesa",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => console.log("Excluir pressed")}>
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={24}
                  color="#FFF"
                  style={{ marginRight: 20 }}
                />
              </Pressable>
              <Pressable onPress={() => console.log("Salvar pressed")}>
                <MaterialCommunityIcons
                  name="check"
                  size={24}
                  color="#FFF"
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
