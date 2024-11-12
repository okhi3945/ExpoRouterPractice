import { View, Text, TouchableOpacity, Image } from "react-native"

import styles from "./nearbyjobcard.style"
import { checkImageURL } from "../../../../../utils"

//nearbyjobcard.style로 스타일이 바뀌었으니 스타일 함수 확인
const NearbyJobCard = ({ item, handleCardPress }) => {

    return (
        //TouchableOpacity 2개 사용하여 item에 들어있는 값 텍스트 값으로 출력
        <TouchableOpacity style={styles.container} onPress={handleCardPress}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image source={checkImageURL(item?.employer_log) //item에 employer_log라는 key 값이 있는지 확인
                    ? { uri: item.employer_log }
                    : require("../../../../../assets/favicon.png") //값이 없으면 assets 폴더에 있는 파비콘 이미지 사용
                } />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {item.job_title}
                </Text>
                <Text style={styles.jobType} numberOfLines={1}>
                    {item.job_employment_type}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearbyJobCard