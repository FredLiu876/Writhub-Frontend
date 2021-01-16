import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

import firebase from 'firebase/app';

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "writhub-e92d7.firebaseapp.com",
  projectId: "writhub-e92d7",
  databaseURL: "https://writhub-e92d7-default-rtdb.firebaseio.com/",
  storageBucket: "writhub-e92d7.appspot.com",
  messagingSenderId: "212487154013",
  appId: "1:212487154013:web:1034d9cb612a30dc84e0b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
