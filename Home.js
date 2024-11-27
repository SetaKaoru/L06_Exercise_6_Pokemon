import React from 'react';
import {Image, StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    boxPokemon: {
        borderWidth: 1,
        justifyContent: 'space-around',
        marginHorizontal: 20,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavender',
        padding:'auto'
    },
    content:{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    nameStyle: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
    },
    header: {
        fontSize: 23,
        marginTop: 20,
        marginHorizontal: 20,
        textAlign: "center",
        fontWeight: 'bold',
        borderWidth: 1,
        fontFamily: "HelveticaNeue-Bold"
    }
});

const Home = ({navigation}) => {
    const renderItem = ({item=datasource, index, section}) => {
        return (
            <View style={styles.boxPokemon}>
                <TouchableOpacity style={styles.content} onPress={() => navigation.navigate('Edit', {
                    index: index,
                    type: section.title,
                    key: item.key
                })}>
                    <Text style={styles.nameStyle}>{item.key}</Text>
                    <Image source={{uri: item.img}} style={[{width: 160, height: 230, margin: 15}]}/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{marginTop: 44, marginBottom: 50}}>
            <StatusBar/>
            <Button title='Add Pokemon' onPress={() => {navigation.navigate('Add')}}/>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, clr, icn, txtClr}})=>(
                             <Text style={[styles.header, {backgroundColor: clr, color: txtClr}]}>
                                 <Icon name={icn} size={25} color={txtClr} />
                                 {title}</Text>
                         )}/>
        </View>
    );
};

export default Home;
