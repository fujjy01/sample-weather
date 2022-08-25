import React, { useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl, Text, StyleSheet, } from 'react-native';
import { Card, Button, ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ForecastDayView } from './ForecastDayView';

export const MainView = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [overlayIsVisible, setOverlayIsVisible] = useState(true);

    const navigation = useNavigation();

    const defaultCity = {
        cityName : '',
        publish : '',
    };
    const defaultToday = {
        dateLabel : '',
        date : '',
        telop : '',
        maxTemp : '',
        minTemp : '',
        rain06 : '',
        rain12 : '',
        rain18 : '',
        rain24 : '',
    };
    const defaultTomorrow = {
        dateLabel : '',
        date : '',
        telop : '',
        maxTemp : '',
        minTemp : '',
        rain06 : '',
        rain12 : '',
        rain18 : '',
        rain24 : '',
    };
    const [forecastCity, setForecastCity] = useState(defaultCity);
    const [forecastToday, setForecastToday] = useState(defaultToday);
    const [forecastTomorrow, setForecastTomorrow] = useState(defaultTomorrow);

    useEffect(() => {
        fetchWeatherApi();
    }, []);

    function fetchWeatherApi() {
        OverlayVisible();
        const url = 'https://weather.tsukumijima.net/api/forecast/city/130010/';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            const jsonCity = {
                cityName : responseJson.location.city,
                publish : responseJson.publicTimeFormatted,
            };
            const jsonToday = {
                dateLabel : responseJson.forecasts[0].dateLabel,
                date : responseJson.forecasts[0].date,
                telop : responseJson.forecasts[0].telop,
                maxTemp : responseJson.forecasts[0].temperature.max.celsius,
                minTemp : responseJson.forecasts[0].temperature.min.celsius,
                rain06 : responseJson.forecasts[0].chanceOfRain.T00_06,
                rain12 : responseJson.forecasts[0].chanceOfRain.T06_12,
                rain18 : responseJson.forecasts[0].chanceOfRain.T12_18,
                rain24 : responseJson.forecasts[0].chanceOfRain.T18_24,
            };
            const jsonTomorrow = {
                dateLabel : responseJson.forecasts[1].dateLabel,
                date : responseJson.forecasts[1].date,
                telop : responseJson.forecasts[1].telop,
                maxTemp : responseJson.forecasts[1].temperature.max.celsius,
                minTemp : responseJson.forecasts[1].temperature.min.celsius,
                rain06 : responseJson.forecasts[1].chanceOfRain.T00_06,
                rain12 : responseJson.forecasts[1].chanceOfRain.T06_12,
                rain18 : responseJson.forecasts[1].chanceOfRain.T12_18,
                rain24 : responseJson.forecasts[1].chanceOfRain.T18_24,
            };
            setForecastCity(jsonCity);
            setForecastToday(jsonToday);
            setForecastTomorrow(jsonTomorrow);
            navigation.setOptions({title: jsonCity.cityName + ' の天気'});
        })
        .catch((error) => {
            alert(error);
        });
        setRefreshing(false);
        setTimeout( function(){ OverlayHide() }, 400);
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchWeatherApi();
    });

    function OverlayVisible() {
        setOverlayIsVisible(true);
    }

    function OverlayHide() {
        setOverlayIsVisible(false);
    }

    const SettingButtonDidPush = () => {
        navigation.navigate('Setting');
    }

    return (
        <View>
            <ScrollView style={styles.scrollview} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Text style={styles.publish}>{forecastCity.publish} 発表</Text>
                <Card style={styles.card}>
                    <Card.Content>
                        <ForecastDayView forecast={forecastToday} />
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <ForecastDayView forecast={forecastTomorrow} />
                    </Card.Content>
                </Card>
                <Button mode='outlined' style={styles.button} onPress={SettingButtonDidPush}>Setting</Button>
            </ScrollView>
            { overlayIsVisible ? (<View style={styles.overlay}><ActivityIndicator size='large' color='white' /></View>) : null }
        </View>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#E8D6CB',
    },
    publish: {
        marginTop: 18,
        marginRight: 20,
        textAlign: 'right',
        fontSize: 16,
        fontFamily: 'YuseiMagic_400Regular',
    },
    card: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },
    button: {
        margin: 20,
        color: '#40220F',
        tintColor: '#FFFFFF',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#000000',
        opacity: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
});
