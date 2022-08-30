import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SplashScreen from '../screens/SplashScreen'
import MainMenu from "../screens/MainMenu"
import ListHeroes from "../screens/ListHeroes"
import DetailHero from "../screens/DetailHero"
import Help from "../screens/Help"
import About from "../screens/About"

const Stack = createStackNavigator()

function Router() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="MainMenu"
                component={MainMenu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListHeroes"
                component={ListHeroes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetailHero"
                component={DetailHero}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Help"
                component={Help}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router