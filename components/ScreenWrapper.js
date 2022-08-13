import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScreenWrapper = ({ children }) => {
    return (
        <SafeAreaView>
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default ScreenWrapper