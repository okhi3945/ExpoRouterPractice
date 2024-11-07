import { View, Text, TouchableOpacity, Image } from "react-native"

import styles from "./popularjobcard.style"
import { checkImageURL } from "../../../../../utils"

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {

    return (
        //TouchableOpacity 2개 사용하여 item에 들어있는 값 텍스트 값으로 출력
        <TouchableOpacity style={styles.container(selectedJob, item)}>
            <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
                <Image source={checkImageURL(item?.employer_log) //item에 employer_log라는 key 값이 있는지 확인
                    ? { uri: item.employer_log }
                    : require("../../../../../assets/favicon.png") //값이 없으면 assets 폴더에 있는 파비콘 이미지 사용
                } />
            </TouchableOpacity>

            <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
                    {item.job_title}
                </Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.publisher(selectedJob, item)} numberOfLines={1}>
                    {item?.job_publisher} -
                </Text>
                <Text style={styles.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PopularJobCard