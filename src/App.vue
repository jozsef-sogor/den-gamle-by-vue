<template>
    <div id="app">
        <Navbar v-if="!$route.meta.hideNavigation" />
        <Heading />
        <router-view />
    </div>
</template>

<style lang="scss"></style>

<script>
import './styles/reboot.module.scss';
import Navbar from './components/Navbar.vue';
import Heading from './components/Heading.vue';

export default {
    components: {
        Navbar,
        Heading
    }
};
</script>
