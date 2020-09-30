/**
 * @flow
 * @format
 */

export const FlatListConfiguration = {
  onEndReachedThreshold: 0.03,
};

export const FirebaseConfig = {
  ios: {
    clientID: 'xxxxxxxxx',
    reversedClientId: 'xxxxxxxxx',
    appId: 'xxxxxxxxx',
    googleAppID: 'xxxxxxxxx',
    apiKey: 'xxxxxxxxx',
    databaseURL: 'xxxxxxxxx',
    storageBucket: 'xxxxxxxxx',
    gcmSenderID: 'xxxxxxxxx',
    messagingSenderId: 'xxxxxxxxx',
    projectId: 'xxxxxxxxx',
    isGcmEnabled: true,
    bundleID: 'xxxxxxxxx',
    androidClientId: 'xxxxxxxxx',
    // enable persistence by adding the below flag
    persistence: true,
  },
  android: {
    clientId: 'xxxxxxxxx',
    appId: 'xxxxxxxxx',
    apiKey: 'xxxxxxxxx',
    databaseURL: 'xxxxxxxxx',
    storageBucket: 'xxxxxxxxx.com',
    messagingSenderId: 'xxxxxxxxx',
    projectId: 'xxxxxxxxx',

    // enable persistence by adding the below flag
    persistence: true,
  },
};
