import { Button } from "react-native-paper";

const PrimaryButton = ({ text, ...props }) => {
    return (
        <Button
            mode="elevated"
            buttonColor="#6552FE"
            textColor="#FFF"

            {...props}
        >
            {text}
        </Button>
    );
}

export default PrimaryButton;