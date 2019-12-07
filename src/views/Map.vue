<template>
    <div id="app">
        <information-pop :houseId="childData" />

        <google-map @pin-clicked="infoPop" />
    </div>
</template>

<script>
import googleMap from '../components/googleMap';
import InformationPop from '../components/InformationPop';

export default {
    name: 'App',
    components: {
        googleMap,
        InformationPop
    },
    data: function() {
        return {
            childData: ''
        };
    },
    methods: {
        infoPop(id) {
            console.log(id);
            this.childData = id;
        }
    }
};
</script>
