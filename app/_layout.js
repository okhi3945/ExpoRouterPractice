import { Stack } from "expo-router";
import { useFont, useFonts } from "expo-font";

const Layout = () => {
    const[fontsLoaded] = useFonts({
        DMBold:require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium:require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular:require("../assets/fonts/DMSans-Regular.ttf")
    })

    //예외처리
    if(!fontsLoaded){
        return null;
    }
    
    return(
        <Stack initialRouteName="home">
            <Stack.Screen name="home" />
        </Stack>
    )
}

export default Layout