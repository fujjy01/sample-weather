import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const ForecastDayView = (props) => {
    //APIのnull対応
    let maxTempText = props.forecast.maxTemp;
    let minTempText = props.forecast.minTemp;
    if (!maxTempText) {
        maxTempText = '--';
    }
    if (!minTempText) {
        minTempText = '--';
    }
    //気象庁→気象協会 テロップ丸め
    //「◯か△」には対応しない(不明にする)
    let telopText = props.forecast.telop;
    let imageSource = '';
    //特定のテロップ置換
    telopText = telopText.replace('のち時々', 'のち');
    telopText = telopText.replace('のち一時', 'のち');
    telopText = telopText.replace('朝晩一時', '時々');
    telopText = telopText.replace('朝夕一時', '時々');
    telopText = telopText.replace('朝のうち', '');
    telopText = telopText.replace('朝のうち一時', '時々');
    telopText = telopText.replace('夕方一時', '時々');
    telopText = telopText.replace('午後は雷', 'のち');
    telopText = telopText.replace('日中時々', '時々');
    telopText = telopText.replace('昼頃から', 'のち');
    telopText = telopText.replace('夕方から', 'のち');
    telopText = telopText.replace('夜は', 'のち');
    telopText = telopText.replace('夜半から', 'のち');
    telopText = telopText.replace('朝夕', '時々');
    telopText = telopText.replace('一時強く降る', '');
    telopText = telopText.replace('一時みぞれ', '');
    telopText = telopText.replace('一時', '時々');
    telopText = telopText.replace('時々止む', '時々');
    telopText = telopText.replace('で雷を伴う', '');
    telopText = telopText.replace('で暴風を伴う', '');
    //テロップとアイコン紐付け
    switch (telopText) {
        case '晴れ':
            imageSource = require('../img/icon_weather_01.png');
            break;
        case '曇り':
            imageSource = require('../img/icon_weather_02.png');
            break;
        case '雨':
            imageSource = require('../img/icon_weather_03.png');
            break;
        case '雪':
            imageSource = require('../img/icon_weather_04.png');
            break;
        case '晴時々曇':
            imageSource = require('../img/icon_weather_05.png');
            break;
        case '晴時々雨':
            imageSource = require('../img/icon_weather_06.png');
            break;
        case '晴時々雪':
            imageSource = require('../img/icon_weather_07.png');
            break;
        case '晴のち曇':
            imageSource = require('../img/icon_weather_08.png');
            break;
        case '晴のち雨':
            imageSource = require('../img/icon_weather_09.png');
            break;
        case '晴のち雪':
            imageSource = require('../img/icon_weather_10.png');
            break;
        case '曇時々晴':
            imageSource = require('../img/icon_weather_11.png');
            break;
        case '曇時々雨':
            imageSource = require('../img/icon_weather_12.png');
            break;
        case '曇時々雪':
            imageSource = require('../img/icon_weather_13.png');
            break;
        case '曇のち晴':
            imageSource = require('../img/icon_weather_14.png');
            break;
        case '曇のち雨':
            imageSource = require('../img/icon_weather_15.png');
            break;
        case '曇のち雪':
            imageSource = require('../img/icon_weather_16.png');
            break;
        case '雨時々晴':
            imageSource = require('../img/icon_weather_17.png');
            break;
        case '雨時々曇':
            imageSource = require('../img/icon_weather_18.png');
            break;
        case '雨時々雪':
            imageSource = require('../img/icon_weather_19.png');
            break;
        case '雨のち晴':
            imageSource = require('../img/icon_weather_20.png');
            break;
        case '雨のち曇':
            imageSource = require('../img/icon_weather_21.png');
            break;
        case '雨のち雪':
            imageSource = require('../img/icon_weather_22.png');
            break;
        case '雪時々晴':
            imageSource = require('../img/icon_weather_23.png');
            break;
        case '雪時々曇':
            imageSource = require('../img/icon_weather_24.png');
            break;
        case '雪時々雨':
            imageSource = require('../img/icon_weather_25.png');
            break;
        case '雪のち晴':
            imageSource = require('../img/icon_weather_26.png');
            break;
        case '雪のち曇':
            imageSource = require('../img/icon_weather_27.png');
            break;
        case '雪のち雨':
            imageSource = require('../img/icon_weather_28.png');
            break;
        default:
            telopText = '不明';
            imageSource = require('../img/icon_weather_none.png');
    }

    return (
        <View style={styles.contentView}>
            <Text style={styles.dateLabelText}>{props.forecast.dateLabel}</Text>
            <Text style={styles.dateText}>{props.forecast.date}</Text>
            <Image style={styles.iconImage} source={imageSource} />
            <Text style={styles.telopText}>{telopText}</Text>
            <View style={styles.tempView}>
                <Text style={styles.maxTempText}>{maxTempText}℃</Text>
                <Text style={styles.minTempText}>{minTempText}℃</Text>
            </View>
            <View style={styles.rainView}>
                <Text style={styles.rainText}>{props.forecast.rain06}</Text>
                <Text style={styles.rainText}>{props.forecast.rain12}</Text>
                <Text style={styles.rainText}>{props.forecast.rain18}</Text>
                <Text style={styles.rainText}>{props.forecast.rain24}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    dateLabelText: {
        marginBottom: 10,
        fontSize: 25,
        fontFamily: 'YuseiMagic_400Regular',
        color: '#40220F',
    },
    dateText: {
        fontSize: 35,
        fontFamily: 'YuseiMagic_400Regular',
        color: '#40220F',
    },
    iconImage: {
        width: 200,
        height: 200,
    },
    telopText: {
        marginBottom: 10,
        fontSize: 35,
        fontFamily: 'YuseiMagic_400Regular',
        color: '#40220F',
    },
    tempView: {
        flexDirection: 'row',
        color: '#40220F',
    },
    maxTempText: {
        margin: 10,
        fontSize: 30,
        fontFamily: 'YuseiMagic_400Regular',
        color: '#A62424',
    },
    minTempText: {
        margin: 10,
        fontSize: 30,
        fontFamily: 'YuseiMagic_400Regular',
        color: '#1536AD',
    },
    rainView: {
        flexDirection: 'row',
        color: '#40220F',
        borderTopWidth: 3,
        borderTopColor: '#EEEEEE',
    },
    rainText: {
        margin: 10,
        fontSize: 20,
        fontFamily: 'YuseiMagic_400Regular',
    },
});