import { View } from "react-native";

const Body = ({ children }) => {
    return (
        <View className="flex m-4" >
            {children}
        </View>
    );
}

export default Body;