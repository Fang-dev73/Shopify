import React, {useState} from "react";
import { ScrollView, Text, StyleSheet, Linking, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import Button from "../../../components/Button";

const Settings = () => {
    const [onEdit, setOnEdit] = useState(false)
    const [values, setValues] = useState({name: 'User', email: 'user@gmail.com'})

    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }

    const onValueChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onEditPress = () => {
        setOnEdit(true)
    }

    const onSave = () => {
        setOnEdit(false)
    }

    return (
        <SafeAreaView>
            <Header title='Settings' />
            <ScrollView style={styles.container}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <TouchableOpacity onPress={onEditPress}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../../assets/writing.png')} />
                    </TouchableOpacity>
                </View>
                <EditableBox value={values.name} onChangeText={(v) => onValueChange('name', v)} editable={onEdit} label={'Name'} />
                <EditableBox value={values.email} onChangeText={(v) => onValueChange('email', v)} editable={onEdit} label={'Email'} />
                {
                    onEdit ? 
                    <Button onPress={onSave} title="Save"/>
                    : null
                }
                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title='FAQ' />
                <ListItem onPress={onItemPress} style={styles.item} title='Contact Us' />
                <ListItem onPress={onItemPress} style={styles.item} title='Terms and Privacy' />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 24,
    },
    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    email: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 16
    },
    content: {
        flex: 1,
    },
    item: {
        padding: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: 'grey'
    }
})

export default Settings;