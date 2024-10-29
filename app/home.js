import { Text, View, SafeAreaView, ScrollView } from "react-native";

//index.js에 컴포넌트들을 한번에 export 해준후에 사용
import { ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs } from "./components";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";

const home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Header",
                    headerShadowVisible: false, //중간에 선 없애기
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
                    ), headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    )
                }}
            />
            {/* 수직 스크롤 바의 표시 여부를 설정 */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>

        </SafeAreaView> 
    )
}

export default home