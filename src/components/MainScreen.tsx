import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Dimensions, Button } from 'react-native';
import { EvilIcons, FontAwesome6, FontAwesome, Octicons, AntDesign, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const { height: heightScreen } = Dimensions.get('window');

const MainScreen = () => {
    return (
        <ScrollView style={styles.heightScroll}>
            <SafeAreaView style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.indexTextHeader}>
                        <Text style={styles.textHeader}>Xin chào</Text>
                        <Text style={styles.textHeader}>Orlando Diggs.</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/avata2.png')} style={{ width: 50, height: 50 }}></Image>
                    </View>
                </View>
                <View>
                    <View style={styles.joinNow}>
                        <View>
                            <Text style={styles.textJoinNow}>50% off</Text>
                            <Text style={styles.textJoinNow}>take any courses</Text>
                            <TouchableOpacity style={styles.buttonJoinNow}>
                                <Text style={[styles.textJoinNow]}>
                                    Join Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={require('../../assets/people.png')} style={styles.imagePeople}></Image>
                </View>
                <View>
                    <Text style={styles.textFindJob}>Find Your Job</Text>
                    <View style={styles.boxFindJob}>
                        <View style={styles.boxRemoteJob}>
                            <Image source={require('../../assets/headhunting.png')} style={{ width: '40%', height: '20%', marginBottom: 10 }} resizeMode='contain'></Image>
                            <Text style={styles.textBoxFindJob}> 44.5K</Text>
                            <Text> Remote Job</Text>
                        </View>

                        <View style={styles.boxOffJob}>
                            <View style={styles.boxFullTimeJob}>
                                <Text style={styles.textBoxFindJob}>66.8K</Text>
                                <Text>Full Time</Text>
                            </View>
                            <View style={styles.boxPtJob}>
                                <Text style={styles.textBoxFindJob}>38.9K</Text>
                                <Text>Part Time</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.textFindJob}>Rencent Job List</Text>
                {[...Array(3)].map((_, index) => (
                    <View style={{ width: '100%', height: heightScreen / 5.3, backgroundColor: '#FFFFFF', borderRadius: 20, marginBottom: 15 }}>
                        <View style={{ margin: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 40, height: 40, backgroundColor: '#d9d4d4', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                                        <FontAwesome6 name="apple" size={26} color="black" />
                                    </View>
                                    <View>
                                        <Text style={styles.textBoxFindJob}>Product Designer</Text>
                                        <Text>Google inc . Califoria, USA</Text>
                                    </View>
                                </View>
                                <View>
                                    <FontAwesome name="bookmark-o" size={24} color="#524B6B" />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                                <Text>$15k</Text>
                                <Text>/Mo</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#ebe8e8', marginRight: 10, paddingVertical: 8, paddingHorizontal: 8, borderRadius: 6 }}>
                                        <Text>Senior desiger</Text>
                                    </View >

                                    <View style={{ backgroundColor: '#ebe8e8', marginRight: 10, paddingVertical: 8, paddingHorizontal: 8, borderRadius: 6 }}>
                                        <Text>Full time</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ backgroundColor: '#fcc0ca', paddingHorizontal: 25, paddingVertical: 8, borderRadius: 6 }}>
                                    <Text>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 45 : 0,
        paddingHorizontal: 10,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 10,
        paddingBottom: heightScreen / 30
    },

    title: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    heightScreens: {
        height: heightScreen + heightScreen / 18
    },

    heightScroll: {
        height: '98%'
    },

    indexTextHeader: {
        marginTop: heightScreen / 30
    },

    textHeader: {
        fontSize: 24,
        fontWeight: '500',
        color: '#0D0140',
    },

    joinNow: {
        marginTop: 30,
        height: heightScreen / 4.5,
        backgroundColor: '#130160',
        borderRadius: 8,
        justifyContent: 'center'
    },

    imagePeople: {
        width: '60%',
        height: '100%',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },

    textJoinNow: {
        fontSize: 18,
        color: '#FFFFFF',
        marginHorizontal: 20,
    },

    buttonJoinNow: {
        backgroundColor: '#FF9228',
        width: '29%',
        marginTop: heightScreen / 35,
        marginLeft: heightScreen / 40,
        paddingVertical: 5,
        borderRadius: 6
    },

    textFindJob: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: heightScreen / 40,
        marginBottom: heightScreen / 30
    },

    boxFindJob: {
        width: '100%',
        height: heightScreen / 4,
        flexDirection: 'row'
    },

    boxRemoteJob: {
        width: '45%',
        height: '100%',
        backgroundColor: '#AFECFE',
        borderRadius: 6,
        marginRight: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxOffJob: {
        width: '50%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    boxFullTimeJob: {
        width: '98%',
        height: '45%',
        backgroundColor: '#BEAFFE',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxPtJob: {
        width: '98%',
        height: '45%',
        backgroundColor: '#FFD6AD',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBoxFindJob: {
        fontSize: 16,
        fontWeight: '600',
    }
})

export default MainScreen