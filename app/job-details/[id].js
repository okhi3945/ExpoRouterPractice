import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { View, Text, ActivityIndicator, Image, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import { COLORS, icons, SIZES } from '../../constants' // 디자인에 필요한 요소들 import
import { ScreenHeaderBtn, Company } from '../components'

//  RefreshControl : refetch 해줄 때 사용 -> 서버가 값을 잘 못가져올 때 새로고침 기능 
/* 
    useLocalSearchParams → [id].js → 동적 라우팅 → 
    url의 특정 부분을 변수로 사용하여 다양한 페이지를 생성 → 
    [id]는 URL의 일부를 동적으로 받아오는 매개변수
    nearbyjobs에서 값하나를 눌렀을 때 각 값의 id값을 사용하여 페이지를 동적으로 생성해줌
*/

const JobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch( // 새로고침을 위한 refetch를 useFetch()로 부터 가져옴
        "job-details", {
        job_id: params.id,
    }
    );
    console.log(data)

    const [refreshing, setRefreshing] = useState(false) // refreshing 상태를 사용하여 새로 고침 중인지 여부를 나타냄
    const onRefresh = useCallback(() => { // 리렌더링 시 동일한 함수를 재사용하도록 함
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    })


    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ), // ()=>() 안에 최상위 태그 사용
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension={"60%"}
                        />
                    )
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} // 스크롤바 false
                refreshControl={<RefreshControl
                    refreshing={refreshing} // 스크롤뷰에서 스와이프하여 새로고침 기능을 추가, 아래로 스와이프시 onRefresh() 호출되어 데이터 새로 가져옴
                    onRefresh={onRefresh}
                />} // 값 새로고침을 위해 RefreshControl 사용
            >
                {isLoading ? (<ActivityIndicator
                    size='large' color={COLORS.primary} />
                ) : error ? (<Text>Something wrong</Text>)
                    : data.length === 0 ? (<Text>No Data Available</Text>) : (<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                        <Company companyLogo={data[0].employer_log}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].job_location}
                        />
                    </View>)}
            </ScrollView>
        </SafeAreaView>
    );
};

export default JobDetails