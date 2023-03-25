import * as Linking from 'expo-linking';

export default {
  prefixes: [
    'https://khazen-be-prod.khazyn.app',
    'khazyn://',
    Linking.createURL('/'),
  ],
  config: {
    screens: {
      Products: {
        path: 'visit',
      },
    },
  },
};
