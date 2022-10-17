import { globalStyle } from 'constants/Styles';
import React from 'react'
import { I18nManager, Text } from 'react-native'

const CustomText = (props) => {
    const styles = props.style?.lenght ? [...props.style] : props.style;
    return (
        <Text
            {...props}
            style={[{
                writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
                ...globalStyle.font400,
                color: '#fff'
            },
                styles
            ]}
        >
            {props.children}
        </Text>
    )
}

export default CustomText
