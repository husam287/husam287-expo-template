import React from 'react';
import { StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import * as YUP from 'yup';

import ScreenWrapper from 'components/general/ScreenWrapper';
import ButtonComponent from 'components/general/ButtonComponent';
import ControllableInput from 'components/general/inputs/ControllableInput';
import ColoredText from 'components/home-components/ColoredText';
import showSuccessMsg from 'hooks/showSuccessMsg';
import FacebookRegisterationButton from 'components/auth-components/FacebookRegisterationButton';
import AppleRegisterationButton from 'components/auth-components/AppleRegisterationButton';
// import { useFetch } from 'hooks/useFetch'
// import { ProductEndpoints } from 'apis/endpoints/ProductEndpoints'

const styles = StyleSheet.create({
  spaceTop10: {
    marginTop: 10,
  },
});

export default function HomeScreen() {
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
    showSuccessMsg('Done!');
    navigation.navigate('testScreen');
  };

  return (
    <ScreenWrapper>
      <ColoredText />

      <ControllableInput
        name="test"
        control={control}
        placeholderText="test"
      />

      <ButtonComponent
        buttonCustomStyle={styles.spaceTop10}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />

      <FacebookRegisterationButton />
      <AppleRegisterationButton />
    </ScreenWrapper>
  );
}
