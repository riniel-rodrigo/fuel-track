import React, { useState } from "react";
import { View, Text } from "react-native";

import Container from "@/components/Container.jsx";
import Body from "@/components/Body.jsx";
import Header from "@/components/Header.jsx";
import Input from "@/components/Input.jsx";
import PrimaryButton from "@/components/PrimaryButton.jsx";


const Calculator = () => {

    const [gasoline, setGasoline] = useState("");
    const [ethanol, setEthanol] = useState("");
    const [answer, setAnswer] = useState("");

    const [errorGas, setErrorGas] = useState("");
    const [errorEth, setErrorEth] = useState("");

    const handleCalculate = () => {

        if (!gasoline || gasoline <= 0) {
            setErrorGas("Informe um valor válido para a Gasolina");
            setTimeout(() => {
                setErrorGas("");
            }, 5000);
        }

        if (!ethanol || ethanol <= 0) {
            setErrorEth("Informe um valor válido para o Etanol");
            setTimeout(() => {
                setErrorEth("");
            }, 5000);
        }

        if (gasoline || gasoline > 0 || ethanol || ethanol > 0) {
            let pct = Math.round((ethanol / gasoline) * 100);
            if (pct > 70) {
                setAnswer(pct + "% Recomendamos abastecer com Gasolina");
            } else {
                setAnswer(pct + "% Recomendamos abastecer com Etanol");
            }
        }
    }

    return (
        <Container>
            <Header title="Calculadora flex" />

            <Body className="gap-2">
                <View>
                    <Input
                        label="Preço da Gasolina:"
                        value={gasoline}
                        onChangeText={gasoline => setGasoline(gasoline)}
                    />
                    <Text className="text-red-600 text-sm mt-2" >{errorGas}</Text>
                </View>

                <View>
                    <Input
                        label="Preço do Etanol:"
                        value={ethanol}
                        onChangeText={ethanol => setEthanol(ethanol)}
                    />
                    <Text className="text-red-600 text-sm mt-2" >{errorEth}</Text>
                </View>

                <View className="mt-5" >
                    <PrimaryButton text="Calcular" onPress={() => handleCalculate()} />
                </View>

                <Text className="text-amber-500 text-lg text-center" >{answer}</Text>
            </Body>
        </Container>
    );
}

export default Calculator;