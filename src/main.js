import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAUMlM6dRMdWCYuNResZUrc5_8dw2RAgX0",
    authDomain: "vue-calendario-c3140.firebaseapp.com",
    databaseURL: "https://vue-calendario-c3140.firebaseio.com",
    projectId: "vue-calendario-c3140",
    storageBucket: "vue-calendario-c3140.appspot.com",
    messagingSenderId: "122684583221",
    appId: "1:122684583221:web:855090d60721e93217b07c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')