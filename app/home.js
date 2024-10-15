import { Text, View, SafeAreaView } from "react-native";
import { ScreenHeaderBtn, Welcome } from "./components";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";

const home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Header",
                    headerShadowVisible: false, //중간에 선 없애기
                    headerLeft:()=>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%"/>
                    ),headerRight:()=>(
                        <ScreenHeaderBtn iconUrl={images.profile2} dimension="100%"/>
                    )
                }}
            />
            <Welcome />

        </SafeAreaView>
    )
}

export default home