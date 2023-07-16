import React, {useState} from 'react';
import { Image, Pressable, SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../components/Button';
import styles from './styles';
import Input from '../Input';

const Header = ({ title, onBackPress, onSearch, onLogout, showLogout, showBack, showSearch, keyword, style }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(!showSearchInput);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ?
                    <Pressable style={style} hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }} />
                    </Pressable>
                    :
                    showSearch ?
                        <Pressable hitSlop={20} onPress={onSearchClick}>
                            <Image style={styles.image} source={require('../../assets/search_icon.png')} />
                        </Pressable>
                        : null}
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{title}</Text>
                {showLogout ?
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.image} source={require('../../assets/logout.png')} />
                    </Pressable> : null
                }
            </View>
            {showSearchInput ?
                <Input value={keyword} onChangeText={onSearch}  placeholder={'Search'} />
                : null
            }
        </View>
    )
}

export default Header;