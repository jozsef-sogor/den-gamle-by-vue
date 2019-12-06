<template>
    <div id="app">
        <google-map />
    </div>
</template>

<script>
import googleMap from '../components/googleMap';

export default {
    name: 'App',
    components: {
        googleMap
    }
};
</script>
