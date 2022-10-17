import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Ionicons } from '@expo/vector-icons';

import CustomText from 'components/CustomText'
import { globalStyle } from 'constants/Styles'
import { COLORS } from 'constants/Colors'

const HeaderComponent = ({ navigation, title, hasBackArrow }) => {
    return (
        <View style={styles.headerStyle}>
            {hasBackArrow && navigation?.canGoBack() &&
                <TouchableOpacity style={{ padding: 5 }} onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-chevron-back" size={24} color={COLORS.primary} />
                </TouchableOpacity>
            }

            <View>
                <CustomText style={styles.headerTitle}>
                    {title}
                </CustomText>
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
        backgroundColor: '#fff'
    },
    headerTitle: {
        color: COLORS.primary,
        fontSize: 22,
        ...globalStyle.font500,
    }
})