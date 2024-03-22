import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const heightScreen  = Dimensions.get('window').height;
const widthScreen  = Dimensions.get('window').width;
console.log(heightScreen)
console.log(widthScreen)

const BoxList = ({text, quantity}) => {
    const [chosenJob, setChossenJob] = useState(false)

    const handleSpecializaton = () => {
        setChossenJob(!chosenJob)
    }

    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: chosenJob ? '#FCA34D' : 'white'}]} onPress={handleSpecializaton}>
            <View style={[styles.circle, {backgroundColor: chosenJob ? 'white' : '#faeae3'}]}>
                <FontAwesome5 name="pencil-ruler" size={24} color="#FF9228" />
            </View>
            <Text style={[styles.nameJob, {color: chosenJob ? 'white' : '#000000'}]}>{text}Design</Text>
            <Text style={[styles.quantity, {color: chosenJob ? 'white' : '#AAA6B9'}]}>{quantity}140 jobs</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: '48%',
        height: heightScreen / 4,
        backgroundColor: '#FCA34D',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 10
    },

    circle: {
        width: '40%',
        height: '36%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 100
    },

    nameJob: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    },

    quantity: {
        color: 'white'
    }
})

export default BoxList

