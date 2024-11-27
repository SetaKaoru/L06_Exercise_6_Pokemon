import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Navigation from "./Navigation";

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [imgLink, setImgLink] = useState('');
    const [type, setType] = useState('Grass');
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Name</Text>
                <TextInput style={{borderWidth: 1,backgroundColor: 'lavender'}} onChangeText={(text) => setName(text)}/>
                <Text style={{fontWeight: 'bold'}}>Image Link</Text>
                <TextInput style={{borderWidth: 1,backgroundColor: 'lavender'}} onChangeText={(text) => setImgLink(text)}/>
            </View>

            <View style={{padding: 10,backgroundColor: 'lavender'}}>
                <RNPickerSelect value={type} onValueChange={(value) => setType(value)}
                                items={[
                                    {label: 'Grass', value:'Grass'},
                                    {label: 'Water', value:'Water'},
                                ]}
                />
            </View>
            <Button title="SUBMIT"
                    onPress={() => {
                        let item = {key: name, img: imgLink};
                        let indexNum = 1;
                        if (type == 'Grass') {
                            indexNum = 0;
                        }
                        datasource[indexNum].data.push(item);
                        navigation.navigate('Home');
                    }}/>
        </View>

    );
};

export default Add;
