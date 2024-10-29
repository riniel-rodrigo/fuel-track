import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { List, Text, FAB } from "react-native-paper";
import { useRouter } from "expo-router";

import Header from "@/components/Header";
import Container from "@/components/Container";
import Body from "@/components/Body";

const DATA = [
  {
    id: 1,
    tipo: 0,
    data: "01/01/2022",
    preco: 6.77,
    valor: 100,
    odometro: 22000,
  },
  {
    id: 2,
    tipo: 1,
    data: "15/01/2022",
    preco: 4.77,
    valor: 150,
    odometro: 25000,
  },
];

export default function Expenses() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <List.Item
      titleStyle={styles.title}
      title={
        "R$" + item.valor.toFixed(2) + " (R$" + item.preco.toFixed(2) + ")"
      }

      descriptionStyle={styles.description}
      description={item.odometro + " km"}

      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? "red" : "green"}
          icon="gas-station"
        />
      )}

      right={(props) => (
        <Text {...props} style={styles.date}>
          {item.data}
        </Text>
      )}

      onPress={() =>
        router.push({
          pathname: "/expenses/newExpense",
          params: {
            id: item.id,
            tipo: item.tipo,
            data: item.data,
            preco: item.preco,
            valor: item.valor,
            odometro: item.odometro,
          },
        })
      }
      
    />
  );

  return (
    <Container>
      <Header title={"Despesas"} />

      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <FAB
          color="#FFF"
          style={styles.fab}
          small
          icon="plus"
          onPress={() => router.push("/expenses/newExpense")}
        />
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#6552FE",
  },
  title: {
    color: '#FFF',
  },
  description: {
    color: '#666',
  },
  date: {
    alignSelf: 'center',
    color: '#888',
  },
});
