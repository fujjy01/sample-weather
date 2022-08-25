import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export const SettingView = () => {

    const source1 = [
        { key: 'item1', value: 'menu1' },
        { key: 'item2', value: 'menu2' },
        { key: 'item3', value: 'menu3' },
        { key: 'item4', value: 'menu4' },
        { key: 'item5', value: 'menu5' },
        { key: 'item6', value: 'menu6' },
    ];

    return (
        <View style={styles.view}>
            <FlatList data={source1} keyExtractor={item => item.key} renderItem={({item}) => (
                <View style={styles.cellView}>
                    <Text style={styles.cellText}>{item.value}</Text>
                </View>
            )} />
            <Text style={styles.footerText}>素材</Text>
            <Text style={styles.footerText}>天気アイコン</Text>
            <Text style={styles.footerLinkText} onPress={() => Linking.openURL('https://ac-illust.com/main/detail.php?id=22405988')}>https://ac-illust.com/main/detail.php?id=22405988</Text>
            <Text style={styles.footerText}>フォント</Text>
            <Text style={styles.footerLinkText} onPress={() => Linking.openURL('https://fonts.google.com/specimen/Yusei+Magic')}>https://fonts.google.com/specimen/Yusei+Magic</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        
    },
    cellView: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        backgroundColor: '#F0F0F0',
    },
    cellText: {
        fontSize: 20,
    },
    footerText: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 15,
    },
    footerLinkText: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 15,
        color: '#0000FF',
    },
});