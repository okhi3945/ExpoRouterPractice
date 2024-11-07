import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import styles from "./nearbyjobs.style";
import { COLORS, SIZES } from "../../../../constants";
import useFetch from "../../../../hook/useFetch";
import { NearbyJobCard } from "../../../components";

const Nearbyjobs = () => {
    const router = useRouter(); //화면 이동을 위해 사용
    //useFetch 훅 함수를 새로 만들어서 값을 받고, rapidApi에서 데이터 받아오기
    const { data, isLoading, error } = useFetch("search", {
        query: "React",
        num_pages: "1",
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popularjobs</Text>
                <TouchableOpacity><Text style={styles.headerBtn}>Show all</Text></TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary} />) : // {}를 사용하여 자바스크립트 문법을 사용하고, 
                    error ? (<Text>Something went wrong</Text>) // 3항 연산자를 사용하여 Loading 상태일 때 ActivityIndicator 돌아가도록 설정
                        : (<FlatList data={data} // -> 기존 [1,2,3,4]에서 Object로 바뀜
                            //item이 객체가 되었기 때문에 { }로 감싸주기
                            renderItem={({ item }) => (
                                <NearbyJobCard item={item}
                                    handleCardPress={() => router.push(`/job-details/${item.job_id}`)} //카드 누르면 상세 내용을 보여주는 페이지로 이동
                                />
                            )}
                            contentContainerStyle={{ columnGap: SIZES.medium }}
                            keyExtractor={item => `nearby-job-${item?.job_id}`}
                        />)}
            </View>


        </View>
    )
}
export default Nearbyjobs