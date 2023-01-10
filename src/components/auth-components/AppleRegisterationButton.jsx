import React from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import HandleErrors from 'hooks/handleErrors';
import ButtonComponent from 'components/general/ButtonComponent';
import { StyleSheet } from 'react-native';
import COLORS from 'constants/Colors';
import loginHandler from 'hooks/loginHandler';
import AuthEndpoint from 'apis/endpoints/AuthEndpoints';
import useFetch from 'hooks/useFetch';

const styles = StyleSheet.create({
  appleRealButton: {
    height: 56,
    width: '100%',
  },
  appleTempButton: {
    alignItem: 'center',
    backgroundColor: COLORS.dark,
    borderWidth: 0,
    height: 56,
    paddingVertical: 0,
  },
});

function AppleRegisterationButton() {
  const [{ loading }, appleLogin] = useFetch(AuthEndpoint.appleLogin(), { manual: true });

  return (!loading
    ? (
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={10}
        style={styles.appleRealButton}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            appleLogin({
              data: {
                access_token: credential?.authorizationCode,
                id_token: credential?.identityToken,
              },
            })
              .then((res) => {
                loginHandler(res?.access_token);
              })
              .catch((err) => HandleErrors(err));
          } catch (e) {
            console.log(e);
          }
        }}
      />
    )
    : (
      <ButtonComponent
        isLoading={loading}
        buttonCustomStyle={styles.appleTempButton}
        onPress={() => {}}
      />
    )
  );
}

export default AppleRegisterationButton;
