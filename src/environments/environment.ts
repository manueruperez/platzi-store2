// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com',
  firebase : {
    apiKey: 'AIzaSyDs3kCQS81x2Z9S2YNVwSWEfjCK6HN4AHA',
    authDomain: 'platzystore2.firebaseapp.com',
    databaseURL: 'https://platzystore2.firebaseio.com',
    projectId: 'platzystore2',
    storageBucket: 'platzystore2.appspot.com',
    messagingSenderId: '864462318706',
    appId: '1:864462318706:web:40efd907bf96e1874666eb'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
