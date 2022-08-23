import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScreenWrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {children}
        </SafeAreaView>
    )
}

export default ScreenWrapper