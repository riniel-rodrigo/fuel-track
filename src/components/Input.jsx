import { TextInput } from "react-native-paper";

const Input = (props) => {
    return (
        <TextInput
            textColor="#FFF"
            style={{ backgroundColor: "#070707", color: "#fff" }}
            keyboardType="decimal-pad"
            {...props}
        />
    );
}

export default Input;