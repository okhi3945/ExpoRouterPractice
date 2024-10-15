import { Stack } from "expo-router";
import { useFont, useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react";

const Layout = () => {
    // useFonts 훅을 사용하여 폰트를 로드
    const[fontsLoaded] = useFonts({
        DMBold:require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium:require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular:require("../assets/fonts/DMSans-Regular.ttf")
    })

    // 폰트가 로드된 후 실행될 비동기 함수
    const onLayoutRootView = useCallback(async()=>{
        if(fontsLoaded){
            await SplashScreen.hideAsync()
        }
    },[fontsLoaded]); 

    
    //예외처리
    if(!fontsLoaded){
        return null;
    }
    
    return(
        <Stack initialRouteName="home" onLayout = {onLayoutRootView}>
            <Stack.Screen name="home" />
        </Stack>
    )
}

export default Layout