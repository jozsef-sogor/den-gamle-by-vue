<template>
    <div id="app">
        <information-pop
            :houseId="childData"
            v-if="childData"
            @close-clicked="closePopUp"
        />

        <google-map @pin-clicked="openPopUp" @positionMatch="openPopUp" />
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
        openPopUp(id) {
            console.log(id);
            this.childData = id;
        },
        closePopUp() {
            this.childData = '';
        }
    }
};
</script>
