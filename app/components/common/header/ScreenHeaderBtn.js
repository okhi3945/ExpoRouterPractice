import { TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ handlePress, iconUrl, dimension }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                style={styles.btnImg(dimension)}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
}

export default ScreenHeaderBtn