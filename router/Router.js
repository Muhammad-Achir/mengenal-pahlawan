import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SplashScreen from '../screens/SplashScreen'
import MainMenu from "../screens/MainMenu"

const Stack = createStackNavigator()

function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main Menu"
                component={MainMenu}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router