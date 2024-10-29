import {View, Text, TouchableOpacity, Image} from "react-native"

import styles from "./popularjobcard.style"

const PopularJobCard = ({item,selectedJob, handleCardPress}) => {
    const checkImageURL = (url) => {
        if(!url) return false;
        else {
            const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)') //RegExp 정규 표현식을 사용하여 url이 유효한지 확인
            return pattern.test(url)
        }
    }
    return (
        <TouchableOpacity style={styles.container(selectedJob,item)}>
            <Image source={checkImageURL(item?.employer_log) //item에 employer_log라는 key 값이 있는지 확인
                ?{uri : item.employer_log}
                :require("../../../../../assets/favicon.png") //값이 없으면 assets 폴더에 있는 파비콘 이미지 사용

            }/>
        </TouchableOpacity>
    )
}

export default PopularJobCard