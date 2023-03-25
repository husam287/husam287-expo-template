import { View } from 'react-native';
import React from 'react';
import ScreenWrapper from 'components/general/ScreenWrapper';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import CustomText from 'components/general/CustomText';
import styles from './styles';

export default function LoginScreen() {
  // const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  // const onLoginHandler = (values) => {
  //   login({ phone: values.phone, password: 'Hh@0123456789' })
  //     .unwrap()
  //     .then((res) => {
  //       showSuccessMsg('Login successfully');
  //       loginHandler({ token: res?.access, refreshToken: res?.refresh });
  //     });
  // };

  return (
    <ScreenWrapper isHeaderHidden>
      <View style={[GLOBAL_STYLES.fullSize, styles.center]}>
        <CustomText>login</CustomText>
      </View>
    </ScreenWrapper>
  );
}
