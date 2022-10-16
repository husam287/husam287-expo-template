import React from 'react'
import { I18nManager, Text } from 'react-native'

const CustomText = (props) => {
    const styles = props.style?.lenght ? [...props.style] : props.style;
    return (
        <Text
            {...props}
            style={[{ writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' }, styles]}
        >
            {props.children}
        </Text>
    )
}

export default CustomText
