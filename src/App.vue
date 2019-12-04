<template>
    <v-app>
        <InformationPop />
        <v-content>
            <router-view />
        </v-content>
        <Navbar v-if="!$route.meta.hideNavigation" />
    </v-app>
</template>

<style lang="scss">
h1 {
    color: $blue;
    font-size: 4rem;
    font-family: $heading-font;
    margin: 0;
    text-align: center;
}
</style>

<script>
import InformationPop from './components/InformationPop.vue';
import Navbar from './components/Navbar.vue';
export default {
    name: 'App',

    components: {
        Navbar,
        InformationPop
    }
};
</script>
