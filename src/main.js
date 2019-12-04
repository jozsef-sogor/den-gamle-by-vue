import Vue from 'vue';
import * as firebase from 'firebase';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: 'AIzaSyDcX22nBFb8oVog4VaJ4HoReGB0XVkBHh4',
    authDomain: 'den-gamle-by-94acb.firebaseapp.com',
    databaseURL: 'https://den-gamle-by-94acb.firebaseio.com',
    projectId: 'den-gamle-by-94acb',
    storageBucket: 'den-gamle-by-94acb.appspot.com',
    messagingSenderId: '7652343749',
    appId: '1:7652343749:web:ce8d325f5989e691e555ac',
    measurementId: 'G-LYWP5DZ5M2'
};

firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
