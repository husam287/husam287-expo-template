import { StyleSheet } from 'react-native';
import React from 'react';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as AuthSession from 'expo-auth-session';
import { ResponseType } from 'expo-auth-session';
import { FontAwesome } from '@expo/vector-icons';

import Constants from 'expo-constants';
import ButtonComponent from 'components/general/ButtonComponent';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import COLORS from 'constants/Colors';
import loginHandler from 'hooks/loginHandler';
import useFetch from 'hooks/useFetch';
import AuthEndpoint from 'apis/endpoints/AuthEndpoints';

const FACEBOOK_BTN_COLOR = '#3B5998';
const FACEBOOK_CLENT_ID = '581500183717057';
const APP_SCHEMA = 'fb581500183717057'; // must be like fb client id

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: FACEBOOK_BTN_COLOR,
    marginVertical: 20,
  },
  marginEnd: {
    marginEnd: 5,
  },
  textStyle: {
    color: COLORS.light,
    fontSize: 21,
    ...GLOBAL_STYLES.font500,
  },
});

function FacebookRegisterationButton({ text = 'Continue with Facebook' }) {
  const isExpoApp = Constants.appOwnership === 'expo';

  const facebookService = Facebook.useAuthRequest({
    expoClientId: FACEBOOK_CLENT_ID,
    clientId: FACEBOOK_CLENT_ID,
    responseType: ResponseType.Token,
    scopes: ['email', 'user_gender', 'user_birthday'],
    redirectUri: AuthSession.makeRedirectUri({
      scheme: APP_SCHEMA,
      useProxy: isExpoApp,
      projectNameForProxy: '@bit68/squad',
      path: 'authorize',
    }),
  });

  const [{ loading }, facebookLogin] = useFetch(AuthEndpoint.facebookLogin(), { manual: true });
  const facebookRegister = async () => {
    const promptAsync = facebookService[2];
    const result = await promptAsync();
    facebookLogin({
      data: { access_token: result?.authentication?.accessToken },
    })
      .then((res) => {
        loginHandler(res?.access_token);
      });
  };

  return (
    <ButtonComponent
      isLoading={loading}
      title={text}
      IconComponent={<FontAwesome name="facebook-f" size={21} color={COLORS.light} style={styles.marginEnd} />}
      buttonCustomStyle={styles.btnStyle}
      textCustomStyle={styles.textStyle}
      onPress={facebookRegister}
    />
  );
}

export default FacebookRegisterationButton;
