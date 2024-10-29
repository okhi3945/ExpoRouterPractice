import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { PopularJobCard } from "../../../components";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../../constants";

const Popularjobs = () => {
    const router = useRouter(); //화면 이동을 위해 사용
    const isLoading = false //로딩 중인지 확인용
    const error = false //에러 확인용

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popularjobs</Text>
                <TouchableOpacity><Text style={styles.headerBtn}>Show all</Text></TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary} />) : // {}를 사용하여 자바스크립트 문법을 사용하고, 
                    error ? (<Text>Something went wrong</Text>) // 3항 연산자를 사용하여 Loading 상태일 때 ActivityIndicator 돌아가도록 설정
                        : (<FlatList data={[1, 2, 3, 4]}
                            renderItem={(item) => (
                                <PopularJobCard item={item} />
                            )}
                        />)}
            </View>


        </View>
    )
}
export default Popularjobs