import { View } from "react-native";

const Body = ({ children }) => {
    return (
        <View className="m-4 flex-1" >
            {children}
        </View>
    );
}

export default Body;