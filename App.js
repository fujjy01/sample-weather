import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { MainView } from './src/MainView';
import { SettingView } from './src/SettingView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts, YuseiMagic_400Regular } from '@expo-google-fonts/yusei-magic';

const Stack = createStackNavigator();

export default function App() {

    let [fontsLoaded] = useFonts({
        YuseiMagic_400Regular,
    });

    if (!fontsLoaded) {
        return (
            <AppLoading />
        );
    } else {
        return (
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Main'>
                        <Stack.Screen name="Main" component={MainView} options={{title: 'Weather', headerTitleStyle: {fontFamily: 'YuseiMagic_400Regular', fontSize: 26,}}} />
                        <Stack.Screen name="Setting" component={SettingView} options={{title: '設定'}} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        );
    }
}
