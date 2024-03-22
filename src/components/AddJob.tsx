import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Platform, TouchableOpacity, Text, View, ScrollView, Modal } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Button from "./Button";
import { Checkbox } from "react-native-ui-lib";
// import { Button } from "react-native-ui-lib/src/components/button";

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const AddJob = () => {
    const list = ['Vị trí công việc', 'Loại hình làm việc', 'Địa chỉ', 'Công ty', 'Loại việc làm', 'Mô tả', 'Chính sách lao động']

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleButtonTypeWorkplace = (index: number) => {
        setSelectedIndex(index === selectedIndex ? -1 : index);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ rowGap: 20 }}>
                    <TouchableOpacity>
                        <Feather name="x" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>Thêm công việc</Text>
                    <View style={styles.content}>
                        {list.map((job, index) => (
                            <View style={styles.boxJob} key={index}>
                                <Text style={styles.text}>{job}</Text>
                                <TouchableOpacity style={styles.circle} onPress={() => handleButtonTypeWorkplace(index)}>
                                    <MaterialIcons name="add" size={24} color="#FF9228" />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                    {/* <Button title="CREATE" color="#130160" onPress={handleButton} style={{width: '50%', paddingVertical: 20, alignSelf: 'center'}} filled={true}></Button> */}
                    <TouchableOpacity style={styles.buttonCreate} >
                        <Text style={styles.textButtonCreate}>Xác nhận</Text>
                    </TouchableOpacity>

                    {selectedIndex === 1 && (
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={true}
                            onRequestClose={() => {
                                console.log("Modal has been closed.");
                            }}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedIndex(-1);
                                        }}
                                    >
                                        <Text style={styles.closeText}>Đóng</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <View style={styles.blurLine}></View>
                                        <Text>Chọn loại hình nơi làm việc</Text>
                                        <Text>Quyết định và lựa chọn loại hình nơi làm việc theo mong muốn của bạn</Text> 
                                        <View>
                                            <View>

                                            </View>
                                            <Checkbox></Checkbox>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 45 : 0,
        marginHorizontal: 16,
        // paddingBottom: 10s
    },

    boxJob: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: heightScreen / 10,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 15
    },

    content: {
        rowGap: 20,
    },

    circle: {
        backgroundColor: '#FFD6AD',
        borderRadius: 50
    },

    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#150B3D'
    },

    textTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#150B3D'
    },

    buttonCreate: {
        alignSelf: 'center',
        backgroundColor: '#130160',
        paddingVertical: 15,
        paddingHorizontal: 80,
        marginBottom: 10,
        borderRadius: 10
    },

    textButtonCreate: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600'
    },

    blurLine: {
        height: 8,
        width: '10%',
        backgroundColor: '#9B9B9B',
        alignSelf: 'center',
        borderRadius: 10
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
        backgroundColor: '#ffffff',
        width: '100%',
        padding: 20,
        borderRadius: 10,
    },

    closeText: {
        alignSelf: 'flex-end',
        color: '#333333',
        fontSize: 16,
    },
})

export default AddJob