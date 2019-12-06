<template>
    <div id="app">
        <information-pop />

        <google-map />
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
    }
};
</script>
