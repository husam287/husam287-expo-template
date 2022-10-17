import { StyleSheet, View } from 'react-native'
import React from 'react'

import { globalStyle } from 'constants/Styles'
import CustomText from 'components/CustomText'
import { Icon } from 'components/Icon'
import { COLORS } from 'constants/Colors'

const TapbarComponent = ({ isFocused, title, tabWidth, iconName }) => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", width: tabWidth }}>
            <Icon
                name={iconName}
                size={24}
                color={isFocused ? COLORS.primary : COLORS.grey}
            />
            <CustomText style={[{ color: isFocused ? COLORS.primary : COLORS.grey, fontSize: 12, marginTop: 6 }, globalStyle.font500]}>
                {title}
            </CustomText>
        </View>
    )
}

export default TapbarComponent

const styles = StyleSheet.create({})