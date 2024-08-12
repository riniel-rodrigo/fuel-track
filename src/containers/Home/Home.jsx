import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculator from '../Calculator.jsx';
import Expenses from '../Expenses.jsx';

const Home = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'calculator', title: 'Calculadora', focusedIcon: 'calculator-variant', unfocusedIcon: 'calculator-variant-outline' },
        { key: 'expenses', title: 'Expenses', focusedIcon: 'gas-station', unfocusedIcon: 'gas-station-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        calculator: Calculator,
        expenses: Expenses,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}

            activeColor="#AEBAC1"
            barStyle={{ backgroundColor: '#121212' }}
            theme={{
                colors: {
                    secondaryContainer: 'rgba(101, 82, 254, 0.1)',
                },
            }}
        />
    );
};

export default Home;