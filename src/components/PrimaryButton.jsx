import { Button } from "react-native-paper";

const PrimaryButton = ({ text, ...props }) => {
    return (
        <Button
            style={styles.Button}
            mode="elevated"
            buttonColor="#6552FE"
            textColor="#FFF"

            {...props}
        >
            {text}
        </Button>
    );
}

const styles = {
    Button: {
        borderRadius: 13,
    },
};

export default PrimaryButton;