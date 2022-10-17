import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as YUP from 'yup'

import ScreenWrapper from 'components/ScreenWrapper'
import InputComponent from 'components/InputComponents/InputComponent'
import ButtonComponent from 'components/ButtonComponent'
import CustomText from 'components/CustomText'
import Container from 'components/Container'
import i18n from 'assets/i18n';
import { useNavigation } from '@react-navigation/native';
// import { useFetch } from 'hooks/useFetch'
// import { ProductEndpoints } from 'apis/endpoints/ProductEndpoints'

const HomeScreen = () => {
  const navigation = useNavigation()
  // const [{ loading, response }] = useFetch(ProductEndpoints.getCategories())
  const schema = YUP.object().shape({
    test: YUP.string().required()
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (value) => {
    console.log(value)
    navigation.navigate('testScreen')
  }

  return (
    <ScreenWrapper>
      <Container>

        <View style={{ backgroundColor: 'red' }}>
          <CustomText>{i18n.t('CFBundleDisplayName')}</CustomText>
        </View>

        <InputComponent
          name={'test'}
          errors={errors}
          control={control}
          placeholderText={"test"}
        />

        <ButtonComponent
          buttonCustomStyle={{ marginTop: 10 }}
          title={'Submit'}
          onPress={handleSubmit(onSubmit)}
        />
      </Container>
    </ScreenWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})