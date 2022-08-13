import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={{ backgroundColor: 'red' }}>
        <Text>HomeScreen</Text>
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})