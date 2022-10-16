import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenWrapper from 'components/ScreenWrapper'
// import { useFetch } from 'hooks/useFetch'
// import { ProductEndpoints } from 'apis/endpoints/ProductEndpoints'

const HomeScreen = () => {
  // const [{ loading, response }] = useFetch(ProductEndpoints.getCategories())

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