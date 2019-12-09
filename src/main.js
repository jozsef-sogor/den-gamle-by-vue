import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire';
import { db } from './db';
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(firestorePlugin);
Vue.config.productionTip = false;
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA3bB16-ieel0BRSzYUmRwqS7gYzXkFkJk'
    }
});

new Vue({
    router,
    vuetify,
    render: h => h(App),
    data() {
        return {
            houses: [],
            iamalone: false,
            partner: false,
            children: false,
            availableTime: 1,
            selectedCenturies: [0],
            selectedRoute: ''
            // overlay: false
        };
    },
    firestore: {
        houses: db.collection('HousesInformation'),
        routes: db.collection('Routes')
    }
    // watch: {
    //     overlay(val) {
    //         val &&
    //             setTimeout(() => {
    //                 this.overlay = false;
    //             }, 3000);
    //     }
    // }
}).$mount('#app');
