import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

const Input = ({ label, type, options, placeholder, isPasssword, onChangeText, value, ...props }) => {
    const [isPassswordVisible, setIsPasswordVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const onSelect = (opt) => {
        onChangeText(opt)
        setModalVisible(!modalVisible)
    }

    return (
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'navy' }}>{label}</Text>
            {
                type === 'picker' ?
                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ width: '100%', height: 50, borderColor: 'black', borderWidth: 1, borderRadius: 10, justifyContent: 'center', padding: 5 }}>
                        <Text style={{ color: value ? 'navy' : 'black', fontWeight: '600', fontSize: 16 }} {...props} >{value ? value?.title : placeholder}</Text>
                        <Image style={{ width: '15%', height: 20, resizeMode: 'contain', alignSelf: 'flex-end', marginTop: -20, alignItems: 'center' }} source={require('../../assets/drop-down.png')} />
                    </Pressable>
                    :
                    <View style={{ width: '100%', height: 50, borderColor: 'black', borderWidth: 1, borderRadius: 10 }}>
                        <TextInput
                            {...props}
                            value={value}
                            onChangeText={onChangeText}
                            placeholderTextColor={"black"}
                            secureTextEntry={isPasssword && !isPassswordVisible}
                            placeholder={placeholder} />
                        {isPasssword &&
                            <Pressable onPress={() => { setIsPasswordVisible(!isPassswordVisible) }}>
                                {isPassswordVisible === false ?
                                    <Image style={{ width: '15%', height: 30, resizeMode: 'contain', alignSelf: 'flex-end', marginTop: -40, marginRight: 5, alignItems: 'center' }} source={{ uri: 'https://static.thenounproject.com/png/906432-200.png' }} />
                                    :
                                    <Image style={{ width: '20%', height: 40, resizeMode: 'contain', alignSelf: 'flex-end', marginTop: -40, alignItems: 'center' }} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/086/018/original/preview-show-interface-icon-free-vector.jpg' }} />
                                }
                            </Pressable>
                        }
                    </View>
            }
            <Modal transparent visible={modalVisible}>
                <TouchableOpacity activeOpacity={0.4} onPress={() => setModalVisible(!modalVisible)} style={styles.modalWrapper}>
                    <View style={styles.modalContent}>
                        <Text style={styles.headerTitle}>Select Options</Text>
                        {options?.map(opt => {
                            if (!opt?.id) {
                                return null
                            }
                            const selected = value?.id === opt?.id
                            return (
                                <Text onPress={() => onSelect(opt)} style={[styles.options, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>
                            )
                        }
                        )}
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 16,
        width: '80%'
    },
    headerTitle: {
        marginBottom: 16,
        fontSize: 18,
        fontWeight: '600',
        color: 'navy',
        textAlign: 'center'
    },
    options: {
        marginVertical: 10,
        fontSize: 16,
        padding: 5,
        borderWidth: 1,
        borderColor: 'navy',
        fontWeight: '600',
        color: 'navy',
        textAlign: 'center'
    },
    selectedOption: {
        marginVertical: 10,
        padding: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'white',
        fontWeight: '600',
        backgroundColor: 'navy',
        color: 'white',
        textAlign: 'center'
    }
})

export default Input;