import { useState } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'
import { useRouter } from "expo-router"
import styles from "./welcome.style"
import { icons, SIZES } from "../../../../constants"

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
    const router = useRouter()
    const [activeJobType, setActiveJobType] = useState("Full-time");


    return (
        <View>
            <View>
                <View style={styles.container}></View>
                <Text style={styles.userName}>윤영학</Text>
                <Text style={styles.welcomeMessage}>환영합니다.</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.serachInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                        placeholder="입력하세요." />
                </View>
                <TouchableOpacity style={styles.searchBtn}
                    onPress={handleClick}>
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.tab(activeJobType,item)}
                            onPress={()=>{setActiveJobType(item)
                                router.push(`/search/${item}`)
                            }}>
                                <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
                            </TouchableOpacity>)
                    }}      //아이템을 꺼내와서 그려주는 행동
                    horizontal
                    keyExtractor={(item)=>item}
                    contentContainerStyle = {{columnGap : SIZES.small}}
                />
            </View>
        </View>
    )
}
export default Welcome