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
body {
    font-family: $body-font;
    font-size: 18pt;
    color: $text-color;

    h1 {
        color: $blue;
        font-size: 2rem;
        font-family: $heading-font;
        margin: 0;
        text-align: center;
    }

    h2 {
        font-size: 1.5rem;
        font-family: $heading-font;
        color: $blue;
    }

    h3 {
        font-size: 1rem;
        font-family: $body-font;
        color: $text-color;
    }
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
