import { View } from 'react-native'
import React from 'react'

const Container = (props) => {
    return (
        <View style={[{ paddingHorizontal: 15 }, {...props.style}]}>
            {props.children}
        </View>
    )
}

export default Container