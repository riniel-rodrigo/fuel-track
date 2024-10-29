import { View, Text, TouchableOpacity } from "react-native";
import { RadioButton, TextInput, Button } from "react-native-paper";
import { useState, React, useEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { useLocalSearchParams } from "expo-router";

import Container from "@/components/Container";
import Body from "@/components/Body";
import Input from "@/components/Input";

const NewExpense = () => {

  const item = useLocalSearchParams();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [tipo, setTipo] = useState("gas");
  const [preco, setPreco] = useState();
  const [valor, setValor] = useState();
  const [odometro, setOdometro] = useState();
  const [data, setData] = useState(moment(new Date()).format("DD/MM/YYYY"));

  useEffect(() => {
    if (item) {
      setTipo(item.tipo == 0 ? "gas" : "eta");
      setData(item.data);
      setPreco(item.preco);
      setValor(item.valor);
      setOdometro(item.odometro);
    }
  }, []);

  return (
    <Container>
      <Body>
        <View className="flex-row mt-5 justify-evenly">
          <View className="flex-row items-center">
            <RadioButton
              value="gas"
              status={tipo === "gas" ? "checked" : "unchecked"}
              color={"red"}
              onPress={() => {
                setTipo("gas");
                console.log("Selecionado: gasolina");
              }}
            />
            <Text className="color-white">Gasolina</Text>
          </View>

          <View className="flex-row items-center">
            <RadioButton
              value="eta"
              status={tipo === "eta" ? "checked" : "unchecked"}
              color={"green"}
              onPress={() => {
                setTipo("eta");
                console.log("Selecionado: Etanol");
              }}
            />
            <Text className="color-white">Etanol</Text>
          </View>
        </View>

        <View className="flex-1 flex-col justify-evenly">
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              onTouchCancel={() => setShow(false)}
              onChange={(event, date) => {
                setShow(false);
                setData(moment(date).format("DD/MM/YYYY"));

              }}
            />
          )}
          <TouchableOpacity onPress={() => setShow(true)} >
            <Input
              label="Data"
              value={data}
              left={<TextInput.Icon icon="calendar" />}
              editable={false}
            />
          </TouchableOpacity>

          <Input
            label="Preço"
            value={preco}
            onChangeText={(text) => setPreco(text)}
            left={<TextInput.Icon icon="currency-brl" />}
          />

          <Input
            label="Valor"
            value={valor}
            onChangeText={(text) => setValor(text)}
            left={<TextInput.Icon icon="currency-brl" />}
          />

          <Input
            label="Odometro"
            value={odometro}
            onChangeText={(text) => setOdometro(text)}
            left={<TextInput.Icon icon="camera-timer" />}
          />

          <View className="flex-row justify-evenly mt-4" >
            <Button
              icon="trash-can-outline"
              mode="contained"
              buttonColor="#bc4749"
              onPress={() => console.log("Pressed")}>
              Cancelar
            </Button>

            <Button
              icon="content-save-outline"
              mode="contained"
              buttonColor="#588157"
              onPress={() => console.log("Pressed")}>
              Salvar
            </Button>
          </View>

        </View>
      </Body >
    </Container >
  );
};

export default NewExpense;
