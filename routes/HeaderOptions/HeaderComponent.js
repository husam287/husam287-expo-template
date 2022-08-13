import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import CustomText from '../../components/CustomText'
import Colors from '../../constants/Colors'
import { globalStyle } from '../../constants/Styles'

const Arrow = () => {
    return require("../../assets/images/back-arrow.png")
}

const HeaderComponent = ({ navigation, title, hasBackArrow }) => {
    return (
        <View style={styles.headerStyle}>
            {hasBackArrow &&
                <TouchableOpacity style={{ padding: 5, marginBottom: 20 }} onPress={() => navigation.goBack()}>
                    <Image style={{ height: 20, width: 10 }} source={Arrow()} />
                </TouchableOpacity>
            }

            <View>
                <CustomText style={{ ...globalStyle.font500, color: Colors.primary, fontSize: 26 }}>{title}</CustomText>
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 15,
        paddingTop: getStatusBarHeight(),
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    }
})