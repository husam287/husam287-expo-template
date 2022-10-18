import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import * as YUP from 'yup';

import i18n from 'assets/i18n';
import ScreenWrapper from 'components/ScreenWrapper';
import ButtonComponent from 'components/ButtonComponent';
import CustomText from 'components/CustomText';
import Container from 'components/Container';
import ControllableInput from 'components/Inputs/ControllableInput';

// import { useFetch } from 'hooks/useFetch'
// import { ProductEndpoints } from 'apis/endpoints/ProductEndpoints'

const HomeScreen = () => {
  const navigation = useNavigation();
  // const [{ loading, response }] = useFetch(ProductEndpoints.getCategories())
  const schema = YUP.object().shape({
    test: YUP.string().required(),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (value) => {
    console.log(value);
    navigation.navigate('testScreen');
  };

  return (
    <ScreenWrapper>
      <Container>
        <View style={styles.redBackground}>
          <CustomText>{i18n.t('CFBundleDisplayName')}</CustomText>
        </View>

        <ControllableInput
          name={'test'}
          control={control}
          placeholderText={'test'}
        />

        <ButtonComponent
          buttonCustomStyle={styles.spaceTop10}
          title={'Submit'}
          onPress={handleSubmit(onSubmit)}
        />
      </Container>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  redBackground: {
    backgroundColor: 'red',
  },
  spaceTop10: {
    marginTop: 10,
  },
});
