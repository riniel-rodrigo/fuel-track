import { View } from "react-native";

const Container = ({ children }) => {
    return (
        <View className="bg-darkTheme h-full" >
            {children}
        </View>
    );
}

export default Container;